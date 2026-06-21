# Borong Xu — Personal Website

A fast, single-page robotics portfolio built with React, TypeScript, and Vite.
Content is sourced from my CV (robotics, embodied intelligence, SLAM,
localization, and autonomous systems).

## Tech stack

- React 19 + TypeScript
- Vite (build + dev server)
- Plain CSS (no UI framework)

## Local development

```bash
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:5173`).

## Production build

```bash
npm run build      # type-checks, then outputs static files to dist/
npm run preview    # serves the built dist/ locally
```

## Deployment

On every push to `main`/`master`, `.github/workflows/deploy.yml` builds the
site and publishes the contents of `dist/` to the **`gh-pages`** branch. Both
hosts serve those prebuilt files from that branch:

- **Vercel** — set the Vercel project's production branch to `gh-pages`. The
  prebuilt output includes a `vercel.json` (shipped from `public/`) that sets
  `buildCommand: null` / `outputDirectory: "."`, so Vercel skips building and
  serves the already-built files directly. Each push to `gh-pages` (i.e. after
  the build Action runs) produces a Production deployment.
- **GitHub Pages** — point GitHub Pages at the `gh-pages` branch (root).

Note: edits flow from `main` through the Action; never commit to `gh-pages`
directly.

## Editing content

All site content lives in [`src/content.ts`](src/content.ts): profile,
projects, skills, education, honors, and contact links. Update that file to
change what the page displays.
