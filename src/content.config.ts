import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project and photo collection is a folder: `<slug>/index.md` plus its images.
// The folder name becomes the URL slug.
const folderId = ({ entry }: { entry: string }) => entry.split('/')[0];

export const PROJECT_STATUSES = ['App Store', 'Mac App Store', 'TestFlight beta', 'Open source', 'In development'] as const;
export const PHOTO_TAGS = ['Travel', 'Film', 'Aerial', 'Portraits', 'Published'] as const;

// What a film frame was shot on. Scans carry the scanner's EXIF, so this stands in for it.
const roll = z.object({ stock: z.string(), camera: z.string().optional(), lens: z.string().optional() });

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '*/index.md', generateId: folderId }),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            tagline: z.string(),
            role: z.string(),
            stack: z.array(z.string()).default([]),
            status: z.enum(PROJECT_STATUSES),
            // Lower numbers sort first on /projects.
            order: z.number(),
            featured: z.boolean().default(false),
            icon: image().optional(),
            iconDark: image().optional(),
            screens: z
                .array(z.object({ light: image(), dark: image().optional(), alt: z.string() }))
                .default([]),
            // Wide screens (desktop/web) render one per row instead of a phone grid.
            wide: z.boolean().default(false),
            install: z.string().optional(),
            links: z
                .object({
                    appStore: z.url().optional(),
                    macAppStore: z.url().optional(),
                    testflight: z.url().optional(),
                    github: z.url().optional(),
                    docs: z.url().optional(),
                    website: z.url().optional(),
                })
                .default({}),
            // App legal pages, kept in Notion. Each one is served from
            // /projects/<slug>/privacy-policy/ and /projects/<slug>/terms/ as a redirect,
            // so App Store listings can use a stable kushs.org URL.
            legal: z.object({ privacy: z.url().optional(), terms: z.url().optional() }).default({}),
        }),
});

const photos = defineCollection({
    loader: glob({ base: './src/content/photos', pattern: '*/index.md', generateId: folderId }),
    schema: z.object({
        title: z.string(),
        // Sorts collections newest first; shown as "Oct 2024" unless dateLabel is set.
        date: z.coerce.date(),
        dateLabel: z.string().optional(),
        place: z.string().optional(),
        tags: z.array(z.enum(PHOTO_TAGS)).min(1),
        // Filename in the folder to use as the cover. Defaults to the first photo.
        cover: z.string().optional(),
        // Film rolls: scanned files carry the scanner's EXIF, so the roll says what shot it.
        // A photo can set its own `film` when a collection mixes stocks or cameras.
        film: roll.optional(),
        // Fallback for files with no camera EXIF.
        camera: z.string().optional(),
        // Optional per-file alt text, captions and ordering. Files not listed here are
        // still shown, after the listed ones, alphabetically.
        photos: z
            .array(z.object({ file: z.string(), alt: z.string(), caption: z.string().optional(), film: roll.optional() }))
            .default([]),
        // Photos hosted elsewhere (Cloudinary, S3).
        remote: z
            .array(z.object({ src: z.url(), alt: z.string(), caption: z.string().optional(), film: roll.optional() }))
            .default([]),
        note: z.string().optional(),
    }),
});

const writing = defineCollection({
    loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
    }),
});

const experience = defineCollection({
    loader: file('src/data/experience.yaml'),
    schema: ({ image }) =>
        z.object({
            company: z.string(),
            role: z.string(),
            previously: z.string().optional(),
            period: z.string(),
            summary: z.string().optional(),
            logo: image().optional(),
        }),
});

export const collections = { projects, photos, writing, experience };
