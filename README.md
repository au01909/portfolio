# Aryan Uppuganti — Portfolio

A recruiter-focused, single-page portfolio built with React + Vite + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The build output lands in `dist/`. Since routing uses `HashRouter`, `dist/` can be deployed
as-is to any static host (GitHub Pages, Netlify, Vercel, S3, etc.) with no server-side rewrite
rules needed.

## Structure

- `src/data/portfolio.ts` — all content (experience, projects, skills, etc.), sourced only from
  the provided resumes/case study. Edit this file to update copy without touching components.
- `src/components/` — section components (Hero, About, Experience, Projects, Skills, Leadership,
  Contact) plus `Nav`, `Footer`, and `Reveal` (the scroll-triggered fade-up wrapper).
- `src/pages/Home.tsx` — assembles the one-page layout.
- `src/pages/ProjectDetail.tsx` — individual project case-study pages at `/#/projects/:slug`.

## Design system

Colors, type, and animation guidelines are wired into `tailwind.config.js` and `src/index.css`
(background `#F7F4EE`, primary `#4E6147`, accent `#B97745`, Clash Display / General Sans / IBM
Plex Mono / Instrument Serif). Fonts load from Fontshare and Google Fonts via `index.html`.

Reduced-motion is respected globally (see the `prefers-reduced-motion` block in `src/index.css`),
and all interactive elements have visible keyboard focus states.
