# Aldi • Portfolio (GitHub Pages)


A clean, animated, and fast portfolio site built with **vanilla HTML/CSS/JS**. Designed for GitHub Pages hosting.


## ✨ Highlights
- Responsive layout with subtle animations
- Dark UI with gradient accents
- Accessible (skip-link, semantic HTML, focus states)
- No build tools required — drop into GitHub Pages
- Easy project updates via `projects.js`


## 🗂 Structure
```
/
├── index.html
├── styles.css
├── script.js
├── projects.js
└── assets/
├── logo.svg
├── favicon.svg
├── hero-map.png
└── cover.png
```


## 🚀 Local Preview
Just open `index.html` in your browser.


Or serve locally:
```bash
python -m http.server 5173
# open http://localhost:5173
```


## 📦 Deploy to GitHub Pages
1. Create a new repo (e.g., `aldi-portfolio`).
2. Push these files to the `main` branch.
3. In GitHub → **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` (`/root`).
4. Wait a minute — your site will be live at `https://aldimiq.github.io/aldi-portfolio/`.


### Use as your profile site (optional)
- Name your repo `<your-username>.github.io` to host at the root domain.


## 🔧 Customize
- Update name, links, and text in `index.html`.
- Replace placeholders in `projects.js` with real links.
- Swap images in `/assets`.


## 📝 License
MIT