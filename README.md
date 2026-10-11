# Aryan Uppuganti — Portfolio

A recruiter-focused, single-page portfolio built with **React 19 + Vite + TypeScript + Tailwind CSS**.

**Live site:** https://au01909.github.io/portfolio/

---

## Features

- **Evidence-first single page**: hero, projects (case studies, key projects, client work), engineering principles, product case studies, technical deep dives, experience, supporting projects, education and skills, leadership and sports, about and contact (`src/pages/Home.tsx`).
- **Case-study routes**: TradeMirror, Repo Copilot and CardioVision at `/#/projects/:slug`, with screenshot or architecture diagram, highlights and detailed sections (`src/pages/ProjectDetail.tsx`).
- **Single content file**: every claim lives in `src/data/portfolio.ts` and is sourced in `docs/`. Unverified metrics are removed, not softened.
- **Responsive and accessible**: checked from 320 to 2560 px, skip link, semantic markup, `prefers-reduced-motion` respected.

See `docs/portfolio-artifacts.md`, `docs/portfolio-audit.md` and `docs/ai-engineering-standards.md`.

## Tech Stack

| Layer | Tooling |
|---|---|
| Framework | React 19, React Router 7 (`HashRouter`) |
| Language | TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS 3 + PostCSS/Autoprefixer |
| Linting | oxlint |
| Deployment | GitHub Actions → GitHub Pages (with `gh-pages` npm script as a manual fallback) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Run locally

```bash
git clone https://github.com/au01909/portfolio.git
cd portfolio
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The build output lands in `dist/`. Since routing uses `HashRouter`, `dist/` can be deployed as-is to any static host (GitHub Pages, Netlify, Vercel, S3, etc.) with no server-side rewrite rules needed.

### Lint

```bash
npm run lint
```

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Starts the Vite dev server with hot module reload |
| `npm run build` | Type-checks (`tsc -b`) then builds the production bundle to `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally |
| `npm run lint` | Runs oxlint against the project |
| `npm run deploy` | Builds and publishes `dist/` to the `gh-pages` branch via the `gh-pages` package |

## Deployment

The site auto-deploys to **GitHub Pages** on every push to `main` via `.github/workflows/deploy.yml`:

1. Checks out the repo and sets up Node 20 (with npm caching).
2. Installs dependencies with `npm ci` and runs `npm run build`.
3. Uploads the `dist/` folder as a Pages artifact and deploys it using GitHub's official `actions/deploy-pages` action.

`vite.config.ts` sets `base: '/portfolio/'` to match the GitHub Pages project path, and `HashRouter` is used specifically so client-side routes (like `/projects/:slug`) resolve correctly on a static host without needing custom 404/rewrite rules.

A manual alternative (`npm run deploy`) is also available, which pushes the built output straight to the `gh-pages` branch using the `gh-pages` package.

## Project Structure

```
portfolio/
├── .github/workflows/deploy.yml   # CI: build & deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                    # Images (e.g. hero.png) and static assets
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Leadership.tsx
│   │   ├── Contact.tsx
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   └── Reveal.tsx             # Scroll-triggered fade-up wrapper
│   ├── data/
│   │   └── portfolio.ts           # All content: profile, education, experience, projects, skills
│   ├── pages/
│   │   ├── Home.tsx                # Assembles the one-page layout
│   │   └── ProjectDetail.tsx       # Individual project case-study pages
│   ├── App.tsx                     # Route definitions
│   ├── main.tsx                    # App entry point, wraps App in HashRouter
│   └── index.css                   # Global styles, reduced-motion handling
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig*.json
└── package.json
```

- **`src/data/portfolio.ts`** — all content (experience, projects, skills, education, links), sourced only from Aryan's resumes and case studies. Edit this file to update copy without touching components.
- **`src/components/`** — section components (Hero, About, Experience, Projects, Skills, Leadership, Contact) plus `Nav`, `Footer`, and `Reveal`.
- **`src/pages/Home.tsx`** — assembles the one-page layout.
- **`src/pages/ProjectDetail.tsx`** — individual project case-study pages at `/#/projects/:slug`.

## Design System

Colors, type, and animation guidelines are wired into `tailwind.config.js` and `src/index.css`:

| Token | Value |
|---|---|
| Background | `#F7F4EE` |
| Surface | `#ECE6DA` |
| Ink (text) | `#1F2421` |
| Muted text | `#5D6762` |
| Border | `#D8D2C8` |
| Primary | `#4E6147` |
| Accent | `#B97745` |

**Typography:** Clash Display (display/headings), General Sans (body), IBM Plex Mono (mono/code accents), Instrument Serif (serif accents). Fonts load from Fontshare and Google Fonts via `index.html`.

**Motion:** a `fadeUp` keyframe animation drives the `Reveal` component's scroll-in effect, and a `blink` keyframe is available for cursor-style accents. `prefers-reduced-motion` is respected globally (see the corresponding block in `src/index.css`), and all interactive elements maintain visible keyboard focus states.
