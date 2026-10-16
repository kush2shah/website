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

async function readExif(key: string): Promise<Exif | undefined> {
    try {
        return await exifr.parse(path.join(process.cwd(), key), [
            'Make',
            'Model',
            'LensModel',
            'DateTimeOriginal',
            'FNumber',
            'ExposureTime',
            'ISO',
            'FocalLength',
        ]);
    } catch {
        return undefined;
    }
}

const enDash = (s: string) => s.replace(/(\d)-(\d)/g, '$1–$2');

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

            const exif = await readExif(key);
            const scanned = !!exif?.Model && SCANNERS.some((re) => re.test(exif.Model!));
            const roll = meta?.film ?? data.film;
            const camera = roll?.camera ?? (exif?.Model && !scanned ? CAMERA_NAMES[exif.Model] ?? exif.Model : data.camera);
            const lens = roll ? roll.lens : exif?.LensModel ? enDash(exif.LensModel) : undefined;

            return {
                src: files[key].default,
                file,
                alt: meta?.alt ?? `Photo from ${data.title}`,
                caption: meta?.caption,
                film: roll?.stock,
                camera,
                lens,
                settings: exif && !scanned ? describeSettings(exif) : undefined,
                taken: !scanned ? exif?.DateTimeOriginal : undefined,
            };
        }),
    );

    const remote = data.remote.map((r): Photo => {
        const roll = r.film ?? data.film;
        return { src: r.src, alt: r.alt, caption: r.caption, film: roll?.stock, camera: roll?.camera ?? data.camera, lens: roll?.lens };
    });
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
