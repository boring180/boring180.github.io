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

The site is a static bundle in `dist/` and can be deployed two ways:

- **GitHub Pages** — `.github/workflows/deploy.yml` builds on every push to
  `main`/`master` and publishes `dist/` via GitHub Pages.
- **Vercel** — `vercel.json` configures the Vite build command and `dist/`
  output directory. Import the repo and deploy.

## Editing content

All site content lives in [`src/content.ts`](src/content.ts): profile,
projects, skills, education, honors, and contact links. Update that file to
change what the page displays.
