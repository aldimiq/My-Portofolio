# Aldi Portfolio (React + anime.js)

Single-page portfolio built with **React**, **Vite**, and **anime.js** to showcase offline-first data platforms, Android tooling, and automation projects. The layout is a long-form landing page with a white canvas, colour accents, and motion cues inspired by anime.js timelines.

## Getting Started

```bash
npm install
npm run dev
# Open http://localhost:5173
```

To produce an optimised build and preview it:

```bash
npm run build
npm run preview
```

## Key Features

- Scrollable, single-page experience optimised for GitHub Pages deployments.
- React components for each section (Hero, Projects, Experience, Services, etc.).
- Reusable `useReveal` hook that coordinates intersection observers with anime.js animations.
- Content centralised in `src/data/portfolio.js` for easy updates.
- White, typography-first theme with blue/purple/teal accent gradients.
- Fully responsive layout with native sticky navigation and accessible markup.

## Project Structure

```
My-Portofolio/
|-- public/
|   `-- assets/
|       |-- favicon.svg
|       |-- hero-map.png
|       |-- logo.svg
|       `-- cover.png
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Deployment (GitHub Pages)

1. Commit and push to your GitHub repository (`aldimiq/your-repo-name`).
2. Build the site: `npm run build`.
3. Deploy the contents of `dist/` to the `gh-pages` branch, e.g. with [`gh-pages`](https://github.com/tschaub/gh-pages) or GitHub Actions.
4. Configure **Settings -> Pages** to serve from the `gh-pages` branch.

## Customisation

- Update copy, metrics, and project details in `src/data/portfolio.js`.
- Swap imagery or icons by replacing files in `public/assets`.
- Adjust colour accents, typography, or layout inside `src/index.css`.
- Extend animations by tweaking the shared `useReveal` hook or applying additional anime.js timelines within sections.

## Utility Script

To streamline local workflows, use the PowerShell helper under `scripts/manage-portfolio.ps1`:

```powershell
# Install dependencies
.\scripts\manage-portfolio.ps1 install

# Start dev server / build / preview
.\scripts\manage-portfolio.ps1 dev
.\scripts\manage-portfolio.ps1 build
.\scripts\manage-portfolio.ps1 preview

# Clean node_modules, dist, and lockfile
.\scripts\manage-portfolio.ps1 clean

# Full install + build sequence
.\scripts\manage-portfolio.ps1 all
```

## License

MIT. See `LICENSE` for full details.
