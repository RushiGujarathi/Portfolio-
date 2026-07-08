# Rushi Gujarathi — Portfolio

**A modern, responsive portfolio website showcasing projects, skills, and achievements.**

Built with **React 18**, **Vite**, and **Framer Motion** for smooth animations and optimal performance.

---

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open the local URL (typically `http://localhost:5173`) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
portfolio-update/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   ├── Certifications.jsx  # Certifications
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer
│   │   └── Reveal.jsx      # Scroll animation wrapper
│   ├── data/
│   │   └── content.js      # All portfolio content (editable)
│   ├── styles/
│   │   ├── global.css      # Global styles
│   │   └── sections.css    # Section-specific styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/
│   └── images/            # Your photos and assets
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies
└── README.md              # This file
```

---

## 🎨 Customization Guide

### Edit Your Content
All portfolio content is centralized in **`src/data/content.js`**:
- **Profile info**: name, roles, tagline, photos
- **About cards**: your journey, vision, interests
- **Skills**: programming languages, frameworks, tools
- **Projects**: featured work and case studies
- **Certifications**: awards and achievements
- **Contact info**: email, social links

### Add Your Images
1. Place your photos in `public/images/`
2. Update paths in `src/data/content.js`
3. Example: `'/images/your-photo.jpg'`

### Add Favicon & OG Image
- **Favicon**: `public/favicon.png` (browser tab icon)
- **Social preview**: `public/og-cover.jpg` (for link sharing)

---

## ✨ Features

✅ **Responsive Design** — Mobile, tablet, desktop  
✅ **Smooth Animations** — Framer Motion scroll effects  
✅ **SEO Optimized** — Meta tags, OG image, structured data  
✅ **Accessibility** — WCAG standards, focus states, ARIA labels  
✅ **Performance** — Vite fast refresh, optimized bundle  
✅ **Contact Form** — Client-side validation with `mailto:` fallback  

---

## 🔧 Technology Stack

| Category | Tools |
|----------|-------|
| **Frontend** | React 18, Vite, Framer Motion |
| **Styling** | CSS3, Tailwind CSS |
| **Icons** | Lucide React |
| **Build** | Vite 5.3+ |
| **Node** | v16+ recommended |

---

## 📝 Notes

### Contact Form
The contact form validates input client-side and uses `mailto:` to open the visitor's email client. For a hosted backend, integrate a form service like **Formspree** or deploy a serverless function.

### Browser Support
- Chrome, Edge, Firefox, Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

Personal portfolio — feel free to use as a template.

---

## 💬 Questions?

If you need help or want to add features:
- Review `src/data/content.js` for content structure
- Check `src/components/` for component details
- Modify `src/styles/` for custom styling

## Note on this build

I couldn't run `npm install` or a build check in the sandbox I built this in (no network
access there), so this hasn't been compiled end-to-end on my side. The code follows standard,
current Vite/React/Framer Motion patterns, but run `npm run dev` locally and tell me about
any error output — I'll fix it immediately.
