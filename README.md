# Rushi Gujarathi — Portfolio (React + Vite + Framer Motion)

## Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL. For a production build:

```bash
npm run build
npm run preview
```

## Before it looks right, you need to add your assets

This environment doesn't have your actual photos, project files, or certificates — only
your original `index.html`/`style.css`/`script.js`. The code below references them by
path so nothing is lost, but you need to drop the real files in:

- `public/images/` — your 5 hero photos, named `rushi-1.jpg` … `rushi-5.jpg`
  (edit `src/data/content.js` → `profile.photos` if you'd rather keep your original filenames)
- `public/favicon.png` and `public/og-cover.jpg` — new, optional, for the browser tab icon
  and link-preview image
- All the coursework/certificate files referenced in `src/data/content.js`
  (`Diploma sem 3/…`, `Hack & Project PPT/…`, etc.) — copy your original folders into
  `public/` so the relative links resolve exactly like they did before

## What changed vs. the original site

- **Stack**: vanilla HTML/CSS/JS → React 18 + Vite + Framer Motion, per your instruction
- **Fixed bugs**: hero image filename mismatch (`Rushi 4.jpg` vs `Rushi4.jpg`), inconsistent
  photo filename casing, and the mobile nav that had no menu at all
- **Projects**: split into a curated 5-project "Flagship" section (full case-study detail)
  and a collapsible "Archive" section holding every diploma file, PPT, and degree project —
  nothing was removed, just organized for a recruiter's 30–60 second scan
- **New**: working hamburger menu, active-section nav indicator, SEO/OG meta tags, focus-visible
  states everywhere, `rel="noopener noreferrer"` on all external links, `aria-hidden` on
  decorative icons, a contact form with client-side validation

## One honest limitation

The contact form validates input but there's no backend wired up — on submit it opens the
visitor's email client pre-filled with their message (via `mailto:`), so messages still reach
you, just without a hosted form endpoint. If you want true in-page submission without leaving
the site, that needs a form service (e.g. Formspree) or a small serverless function — happy to
wire that up if you want it.

## Note on this build

I couldn't run `npm install` or a build check in the sandbox I built this in (no network
access there), so this hasn't been compiled end-to-end on my side. The code follows standard,
current Vite/React/Framer Motion patterns, but run `npm run dev` locally and tell me about
any error output — I'll fix it immediately.
