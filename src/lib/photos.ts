import path from 'node:path';
import exifr from 'exifr';
import type { ImageMetadata } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

// Every image inside a collection folder is picked up automatically: dropping a file
// into src/content/photos/<collection>/ is enough to publish it.
const files = import.meta.glob<{ default: ImageMetadata }>('/src/content/photos/*/*.{jpg,jpeg,png,webp,JPG,JPEG}', {
    eager: true,
});

// EXIF model strings are terse; show the names people actually use.
const CAMERA_NAMES: Record<string, string> = {
    'ILCE-7RM3': 'Sony a7R III',
    'ILCE-6600': 'Sony a6600',
    'DSC-RX100M3': 'Sony RX100 III',
    'X-E4': 'FUJIFILM X-E4',
    'X-H2S': 'FUJIFILM X-H2S',
    'FinePix X100': 'FUJIFILM X100',
    FC3170: 'DJI Mavic Air 2',
};

// Film scans carry the scanner's EXIF, which says nothing about the photo.
const SCANNERS = [/opticfilm/i, /coolscan/i, /epson/i];

export type Photo = {
    src: ImageMetadata | string;
    alt: string;
    caption?: string;
    file?: string;
    // Film stock, for film frames.
    film?: string;
    camera?: string;
    lens?: string;
    settings?: string;
    taken?: Date;
};

export type PhotoCollection = {
    id: string;
    entry: CollectionEntry<'photos'>;
    data: CollectionEntry<'photos'>['data'];
    photos: Photo[];
    cover: Photo;
    dateLabel: string;
    // Every stock, camera and film lens used. Digital lenses vary frame to frame, so they
    // stay in each photo's details instead.
    gear: { film: string[]; cameras: string[]; lenses: string[] };
};

const unique = (values: (string | undefined)[]) => [...new Set(values.filter((v): v is string => !!v))];

type Exif = {
    Make?: string;
    Model?: string;
    LensModel?: string;
    DateTimeOriginal?: Date;
    FNumber?: number;
    ExposureTime?: number;
    ISO?: number;
    FocalLength?: number;
};

const EXIF_TAGS = ['Make', 'Model', 'LensModel', 'DateTimeOriginal', 'FNumber', 'ExposureTime', 'ISO', 'FocalLength'];

async function readExif(key: string): Promise<Exif | undefined> {
    try {
        return await exifr.parse(path.join(process.cwd(), key), EXIF_TAGS);
    } catch {
        return undefined;
    }
}

// Cloudinary keeps the uploaded original, EXIF and all, at the URL without transformations.
// The tags sit at the start of the file, so only the first 64 KB is fetched. A photo that
// can't be read is still published, just without camera details.
async function readRemoteExif(src: string): Promise<Exif | undefined> {
    if (!isCloudinary(src)) return undefined;
    const original = src.replace(/\/image\/upload\/.*?(v\d+\/)/, '/image/upload/$1');
    let head: Buffer;
    try {
        const res = await fetch(original, { headers: { Range: 'bytes=0-65535' }, signal: AbortSignal.timeout(15_000) });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        head = Buffer.from(await res.arrayBuffer());
    } catch (err) {
        console.warn(`[photos] couldn't fetch ${original} for EXIF: ${(err as Error).message}`);
        return undefined;
    }
    // Formats exifr can't read (WebP) just have no details, like a local file without EXIF.
    return exifr.parse(head, EXIF_TAGS).catch(() => undefined);
}

const enDash = (s: string) => s.replace(/(\d)-(\d)/g, '$1–$2');

// Drones and phones name their built-in lens "24.0 mm f/2.8" or "iPhone 16 Pro Max back
// triple camera…"; the camera name and settings already say as much.
function lensName(exif: Exif): string | undefined {
    const lens = exif.LensModel;
    if (!lens || /^[\d.]+ ?mm f\/[\d.]+$/.test(lens) || (exif.Model && lens.startsWith(exif.Model))) return undefined;
    return enDash(lens);
}

type Roll = { stock: string; camera?: string; lens?: string };

// Camera, lens and settings for one photo. A film roll names the stock, camera and lens;
// EXIF still supplies settings and date unless it came from a film scanner.
function describe(exif: Exif | undefined, roll: Roll | undefined, fallbackCamera?: string) {
    const scanned = !!exif?.Model && SCANNERS.some((re) => re.test(exif.Model!));
    const digital = exif && !scanned ? exif : undefined;
    return {
        film: roll?.stock,
        camera: roll?.camera ?? (digital?.Model ? (CAMERA_NAMES[digital.Model] ?? digital.Model) : fallbackCamera),
        lens: roll ? roll.lens : digital && lensName(digital),
        settings: digital && describeSettings(digital),
        taken: digital?.DateTimeOriginal,
    };
}

function describeSettings(exif: Exif): string | undefined {
    const parts: string[] = [];
    if (exif.FocalLength) parts.push(`${Math.round(exif.FocalLength)}mm`);
    if (exif.FNumber) parts.push(`f/${exif.FNumber}`);
    if (exif.ExposureTime) {
        parts.push(exif.ExposureTime >= 1 ? `${exif.ExposureTime}s` : `1/${Math.round(1 / exif.ExposureTime)}s`);
    }
    if (exif.ISO) parts.push(`ISO ${exif.ISO}`);
    return parts.length ? parts.join(' · ') : undefined;
}

export function formatMonth(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}

async function buildCollection(entry: CollectionEntry<'photos'>): Promise<PhotoCollection> {
    const { data } = entry;
    const prefix = `/src/content/photos/${entry.id}/`;
    const keys = Object.keys(files)
        .filter((key) => key.startsWith(prefix))
        .sort();
    const listed = new Map(data.photos.map((p) => [prefix + p.file, p]));

    for (const key of listed.keys()) {
        if (!keys.includes(key)) console.warn(`[photos] ${entry.id}: listed file not found: ${key.slice(prefix.length)}`);
    }

    const ordered = [...[...listed.keys()].filter((key) => keys.includes(key)), ...keys.filter((key) => !listed.has(key))];

    const local = await Promise.all(
        ordered.map(async (key): Promise<Photo> => {
            const meta = listed.get(key);
            const file = key.slice(prefix.length);
            if (!meta) console.warn(`[photos] ${entry.id}/${file} has no alt text; add it to index.md`);

            return {
                src: files[key].default,
                file,
                alt: meta?.alt ?? `Photo from ${data.title}`,
                caption: meta?.caption,
                ...describe(await readExif(key), meta?.film ?? data.film, data.camera),
            };
        }),
    );

    const remote = await Promise.all(
        data.remote.map(async (r): Promise<Photo> => {
            const roll = r.film ?? data.film;
            // Film scans say nothing about the shot, so only digital photos are fetched.
            const exif = roll ? undefined : await readRemoteExif(r.src);
            return { src: r.src, alt: r.alt, caption: r.caption, ...describe(exif, roll, data.camera) };
        }),
    );
    const photos = [...local, ...remote];
    if (!photos.length) throw new Error(`[photos] ${entry.id} has no photos`);

    const cover = (data.cover && photos.find((p) => p.file === data.cover)) || photos[0];

    const gear = {
        film: unique(photos.map((p) => p.film)),
        cameras: unique(photos.map((p) => p.camera)),
        lenses: unique(photos.filter((p) => p.film).map((p) => p.lens)),
    };

    return {
        id: entry.id,
        entry,
        data,
        photos,
        cover,
        dateLabel: data.dateLabel ?? formatMonth(data.date),
        gear,
    };
}

let cache: Promise<PhotoCollection[]> | undefined;

// Newest first. Cached so EXIF is read once per build, not once per page.
export function getPhotoCollections(): Promise<PhotoCollection[]> {
    cache ??= getCollection('photos')
        .then((entries) => Promise.all(entries.map(buildCollection)))
        .then((all) => all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()));
    return cache;
}

// Cloudinary resizes in the URL: c_limit only ever scales down, and the URL's own
// f_auto,q_auto still picks the format and quality. Other remote hosts serve one size.
export const isCloudinary = (src: string) => /^https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\//.test(src);

export function remoteAt(src: string, width: number): string {
    return isCloudinary(src) ? src.replace('/image/upload/', `/image/upload/c_limit,w_${width}/`) : src;
}

// One line under a photo: "Sony a7R III · FE 24–70mm F2.8 GM · 35mm · f/8 · 1/250s · ISO 100",
// or "Kodak Gold 200 · Nikon FE · Micro-NIKKOR 55mm f/2.8" for film.
export function photoDetails(photo: Photo): string {
    return [photo.film, photo.camera, photo.lens, photo.settings].filter(Boolean).join(' · ');
}
