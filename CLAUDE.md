# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`kushs.org` — Kush Shah's personal site. It's a **single React SPA, no backend**, deployed as static
files to GitHub Pages. It serves two portfolios that share one shell: photography (galleries by
camera body and film stock) and programming/professional (work, projects, education, clubs), plus a
handful of vanity redirects to external content.

There is no API, no server, and no database. If a change seems to need one, ask first.

## Layout

Everything lives at the repo root — there is no nested app directory.

```
src/
  index.tsx                  entry point; GA4 init, self-hosted Inter import
  components/
    App.tsx                  all route definitions + framer-motion page transitions
    NavBar.tsx  Home.tsx  Info.tsx  ChangeLog.tsx  TopButton.tsx
    TableauRedirect.tsx      one-off external redirect
    photography/             PhotoGallery, GroupedPhotoGallery, PhotoTile, GalleryModal,
                             GalleryPage + per-category pages (Film, Digital, Aerial, …)
    experience/              Work, Projects, Education, Clubs, Experience
    errors/NotFound.tsx
  css/                       SASS, mirrors the component tree
    global/                  app, index, NavBar, link, redesign (shared design tokens)
    photo/  experience/
  assets/                    images, organized by category — see "Assets" below
    fonts/Inter/             self-hosted Inter (loaded from index.tsx, not a CDN)
public/
  index.html                 meta + Open Graph tags; og-image.jpg lives here too
patches/                     patch-package fix for resolve-url-loader
.github/workflows/deploy.yml CI deploy
```

## Commands

```bash
npm install          # runs patch-package via postinstall
npm start            # dev server on :3000
npm run build        # production build to build/; postbuild copies index.html -> 404.html
npm run deploy       # manual gh-pages deploy (CI normally handles this)
```

There is **no test suite** — the stale Create React App template test was removed, along with
`@testing-library/*` and `setupTests.ts`. If you add tests, re-add those devDependencies first.

## Deployment

Pushing to `main` or `react` triggers `.github/workflows/deploy.yml`, which builds and publishes
`build/` to GitHub Pages with the `kushs.org` CNAME. Don't run `npm run deploy` by hand unless CI is
broken.

Because GitHub Pages has no server-side routing, the `postbuild` step copies `index.html` to
`404.html` so deep links like `/photography` resolve to the SPA. Keep that script intact.

## Conventions worth knowing

- **Routing:** every route is declared in `src/components/App.tsx`. Pages are wrapped in
  `PageWrapper` for enter/exit animation; `ScrollToTop` resets scroll on navigation.
- **Redirects:** small inline components in `App.tsx` that set `window.location.href` in an effect.
  Follow that pattern for new ones.
- **Dark mode:** components take a `d` (isDarkMode) boolean and swap between paired light/dark image
  assets. Project screenshots come in `-light` / `-dark` pairs.
- **Design tokens:** `src/css/global/redesign.scss` holds the shared visual language. `App.tsx` sets
  `data-weight`, `data-card`, and `data-logos` on `<body>` — these drive variants in that stylesheet.
- **Icons:** `lucide-react`. **Animation:** `framer-motion`. Don't add another library for either.
- **Analytics:** GA4 via `react-ga4`, initialized in `index.tsx`.

## Assets

`src/assets/` is large (photography portfolio) and images are imported through the bundler, so
**every image you add ships in the JS build**. Before adding one:

- Resize to roughly its display size. Do not commit multi-megabyte camera or screenshot originals.
- Prefer WebP for new screenshots; keep JPEG for photographs.
- Add `loading="lazy"` to any `<img>` that isn't above the fold, and always set a real `alt`.

## Gotchas

- `index.html`'s meta/Open Graph tags are static, so **all routes share one link preview**. Changing
  per-route previews would require prerendering — don't attempt it casually.
- Fonts are self-hosted. Don't add Google Fonts `<link>` tags; three unused ones were removed.
- `patches/resolve-url-loader+4.0.0.patch` is load-bearing for the SASS build. Keep `patch-package`
  in `postinstall`.
- `react-scripts` 5 (Create React App) is unmaintained. It still works; a Vite migration is a known
  open idea, not an in-progress one.
