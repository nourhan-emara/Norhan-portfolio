# Norhan — Portfolio (Next.js + Tailwind + GSAP)

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.js       → fonts, global wrappers (cursor glow, progress bar)
  page.js          → composes all sections
  globals.css      → design tokens (colors, gradients, shared effects)
components/
  Header.jsx       → nav with scroll shadow
  Hero.jsx         → split-text heading, typing terminal, counters
  Marquee.jsx       → infinite scrolling tech strip
  About.jsx        → bio + timeline
  Skills.jsx       → skill grid with cursor spotlight + animated bars
  Projects.jsx     → project rows with hover interactions
  Contact.jsx      → CTA panel
  Footer.jsx
  CursorGlow.jsx   → global mouse-follow glow
  ProgressBar.jsx  → top scroll progress bar
hooks/
  useReveal.js     → shared GSAP ScrollTrigger fade-in
  useMagnetic.js   → shared magnetic button effect
lib/
  gsap.js          → GSAP + ScrollTrigger registration (client-only)
```

## Customize

- **Colors / fonts**: edit CSS variables in `app/globals.css` (`:root`) and
  `tailwind.config.js` if you rename tokens.
- **Content**: each section's text/data lives at the top of its component
  file as plain arrays/objects (`skills`, `projects`, `timeline`, `stats`).
- **Project links**: add a `url` field to the `projects` array in
  `components/Projects.jsx` and wrap each row in an `<a>` once you have real
  project URLs.
