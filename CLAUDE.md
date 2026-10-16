# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`kushs.org` — Kush Shah's personal site. An **Astro static site, no backend**: every route is
prerendered to HTML at build time and deployed to GitHub Pages. Sections: Writing, Projects,
Photos, About, plus a changelog and a handful of short-link redirects.

There is no server, database or API. Anything that looks dynamic (camera details, "latest"
lists, RSS, the sitemap) is computed at build time. If a change seems to need a server, ask first.

## Commands

Requires **Node ≥ 22.22** (Astro 7). The system Node may be older; nvm has v25 installed at
`~/.nvm/versions/node/v25.2.1/bin`.

```bash
npm install
npm run dev       # dev server on :4321
npm run build     # static output to dist/
npm run preview   # serve dist/ locally
npm run check     # astro check (types + content schemas)
```

There is no test suite. `npm run check` and `npm run build` are the gates: content that
doesn't match a schema fails the build with the file and field named.

## Content model

Content lives in files, not components. Schemas are in `src/content.config.ts`.

- **Projects** — `src/content/projects/<slug>/index.md` beside the project's icon and
  screenshots. Frontmatter: name, tagline, role, stack, status, order, featured, icon/iconDark,
  screens (light/dark pairs + alt), links, legal. The Markdown body is the project page.
  Each folder becomes `/projects/<slug>/`.
- **App legal pages** — the policies themselves live in Notion. A project's `legal.privacy` /
  `legal.terms` URLs generate `/projects/<slug>/privacy-policy/` and `/projects/<slug>/terms/`,
  which redirect there. Use these kushs.org URLs in App Store Connect so the Notion pages can
  move without breaking a listing. The Notion page must be published to the web
  (`kushah.notion.site`), or the redirect lands on "page not found".
- **Photos** — `src/content/photos/<collection>/index.md` beside the photos. **Any image in the
  folder is published automatically**; `photos:` in the frontmatter only sets alt text, captions
  and order. Camera, lens, settings and date are read from EXIF at build (`src/lib/photos.ts`).
  Film rolls set `film:` because scans carry the scanner's EXIF. `remote:` holds photos hosted
  elsewhere (Cloudinary, S3). Tags drive the filter on `/photos/`.
- **Writing** — `src/content/writing/*.md` with title, description, date, draft. The Writing nav
  link, home section and RSS link only appear once a non-draft post exists.
- **About** — bio in `src/data/bio.md`, roles in `src/data/experience.yaml`.
- **Changelog** — `src/data/changelog.md`. Add an entry for user-visible changes.

To add a photo: drop it in the collection folder, then add an alt line to that collection's
`index.md` (the build warns about any photo without one). To add a collection: new folder +
`index.md`. To add a project: new folder + `index.md` + icon.

## Layout

```
src/
  content.config.ts      collection schemas
  content/               projects/, photos/, writing/ (see above)
  data/                  bio.md, experience.yaml, changelog.md
  assets/                images not tied to a collection (headshot, logos, store badges)
  lib/photos.ts          collection assembly + EXIF; cached once per build
  lib/site.ts            site constants, social links, getPosts()
  layouts/Base.astro     <head> (per-page title, description, Open Graph), nav, footer, GA4
  components/            Nav, Footer, Photo, ThemedImage, ProjectCard, CollectionCard, PhotoStrip…
  pages/                 routes; [slug].astro files generate one page per entry
  styles/global.css      design tokens + shared classes (.wrap, .eyebrow, .pill, .button, .prose)
public/                  copied as-is: CNAME, favicon, og-image.jpg, robots.txt
astro.config.mjs         site URL, sitemap, redirects
```

## Conventions

- **Images:** import through content schemas (`image()`) or `astro:assets`, never `public/`.
  Use `<Photo>` for photos (AVIF/WebP at several widths) and `<ThemedImage>` for icons and
  screenshots with a dark variant. Don't re-encode the JPEGs in `src/content/photos/` — they're
  already compressed; Astro generates the web sizes.
- **Styling:** tokens and shared classes in `global.css`; everything else is scoped `<style>` in
  the component. To style an image rendered by a child component, wrap it and use `:global(img)`.
- **Client JS:** small custom elements in `<script>` tags (photo filter, lightbox, scroll strip,
  copy button). No framework runtime; keep it that way unless something genuinely needs one.
- **Redirects:** old routes and short links (`/cc`, `/app-terms`, `/app-privacy`, `/fotodex`…)
  are in `astro.config.mjs`. `/app-terms` and `/app-privacy` are linked from App Store listings;
  don't remove them.
- **Dark mode:** follows the system via `prefers-color-scheme`; tokens are redefined in
  `global.css`.

## Deployment

Pushing to `astro` runs `.github/workflows/deploy.yml`: Node 24, `npm ci`, `npm run build`,
then publishes `dist/` to the `gh-pages` branch with the `kushs.org` CNAME. Other branches
don't deploy from this workflow — but `react` still has the old React workflow, so a push
there would redeploy the old site. Don't push to `react` unless it has been merged up.
