# kushs.org

Kush Shah's personal site: writing, projects and photography. Built with [Astro](https://astro.build)
as a static site and deployed to GitHub Pages.

## Run it

Requires Node 22.22 or newer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Add things

| To add | Do this |
| --- | --- |
| A photo | Drop it in `src/content/photos/<collection>/` and add an alt line to that folder's `index.md`. Camera and lens are read from the file. |
| A photo collection | Create `src/content/photos/<name>/index.md` with a title, date and tags, plus the photos. |
| A project | Create `src/content/projects/<name>/index.md` with its icon and screenshots beside it. |
| A post | Create `src/content/writing/<slug>.md` with a title, description and date. |

Schemas live in `src/content.config.ts`; the build fails with a clear message if a file is missing
something.

## Deploy

Pushing to `astro` builds the site and publishes it to GitHub Pages at kushs.org.
