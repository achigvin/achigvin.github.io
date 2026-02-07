# Alena Chigvintseva – Portfolio

**Software Engineer • 42 Berlin • Systems + Web**

A modern, minimalist portfolio website showcasing systems programming expertise (C, Unix), full-stack development, and thesis research in medical AI.

---

## 🎯 Features

- **Semantic HTML & Accessibility**: Proper heading hierarchy, ARIA labels, keyboard navigation, focus management
- **Dark-first Design**: Professional dark theme with red accent (#e84855) inspired by the attached photo
- **Mobile-responsive**: Works flawlessly from 360px (mobile) to 4K screens
- **Data-driven Content**: Projects and skills stored in modular JS files for easy future updates
- **Performance**: Vanilla HTML/CSS/JS, no framework bloat, optimized images, lazy loading
- **Scroll Spy Navigation**: Active nav link highlights based on current section
- **Expandable Project Details**: Native `<details>` elements for "View More" functionality

---

## 📁 Project Structure

```
.
├── index.html              # Semantic HTML scaffold
├── css/
│   └── styles.css         # Design system + responsive layout
├── js/
│   └── main.js            # Scroll spy, accessibility, utilities
├── content/
│   ├── projects.js        # Featured + 42 Berlin projects data
│   └── skills.js          # Skills grouped by category
├── images/
│   └── avatar.jpg         # Profile photo
└── README.md              # This file
```

---

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper heading hierarchy
- **CSS3**: Custom properties, Flexbox, Grid, mobile-first media queries
- **JavaScript (Vanilla)**: ES6+, no dependencies
  - Scroll spy using IntersectionObserver
  - Keyboard accessibility enhancements
  - Image lazy loading

---

## 🚀 Getting Started

### Local Development

```bash
# Navigate to repo
cd personal-portfolio-website

# Start local server (Python 3)
python -m http.server 8000

# Open browser
# http://localhost:8000
```

### Live Demo

Visit: https://chigvintseva.github.io/personal-portfolio-website/

---

## 📝 Content Management

### Adding a New Project

Edit `content/projects.js` and add to the appropriate object:

```javascript
{
    id: 'my-project',
    title: 'Project Name',
    summary: 'One-line summary',
    tags: ['Tech1', 'Tech2'],
    outcome: 'Optional outcome/impact',
    links: {
        github: 'https://github.com/...',
        demo: 'https://demo.com'
    },
    details: [
        { heading: 'Section', points: ['Bullet 1', 'Bullet 2'] }
    ]
}
```

Run the site – content renders automatically via `renderFeaturedProjects()`.

### Adding Skills

Edit `content/skills.js` and add to category:

```javascript
frontend: [
    { name: 'Framework Name', icon: '⚡' }
]
```

---

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Skip-to-content link
- ✅ Keyboard-navigable (Tab, Enter, Space for `<details>`)
- ✅ Visible focus states (blue outline)
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text on images
- ✅ Color contrast ≥ 4.5:1 (WCAG AA standard)

---

## 📱 Responsive Breakpoints

- **Mobile (360–640px)**: Single column, optimized touch targets (44px+)
- **Tablet (641–1024px)**: Two columns, adjusted typography
- **Desktop (1025px+)**: Full layout, rich spacing

---

## 🎨 Design Tokens

### Colors

```css
--color-bg: #0f0f0f;            /* Dark background */
--color-surface: #1a1a1a;       /* Card background */
--color-accent: #e84855;        /* Red highlight */
--color-text: #e5e5e5;          /* Main text */
--color-text-muted: #a0a0a0;    /* Secondary text */
```

### Spacing

All spacing uses `--space-*` tokens (4px base unit):
- `--space-4` = 1rem
- `--space-8` = 2rem
- `--space-16` = 4rem
- etc.

---

## 🔍 SEO & Performance

- **Meta tags**: Title, description, OpenGraph for social sharing
- **Favicon**: Inline SVG with initials "AC"
- **Images**: Lazy loading via `loading="lazy"` attribute
- **No tracking**: Privacy-focused (no analytics/cookies)
- **Lighthouse target**: ≥ 90 on all metrics

---

## 🚢 Deployment

### GitHub Pages (Recommended)

1. Ensure `index.html` is in root
2. Go to Settings → Pages → Source: main branch, root folder
3. Deploy automatically on push

```bash
git push origin main
```

Site goes live at: `https://<username>.github.io/<repo-name>/`

### Netlify (Alternative)

1. Connect repo
2. Build command: (leave blank)
3. Publish directory: `/`
4. Deploy

---

## ✅ Pre-Launch Checklist

- [ ] All external links tested and working
- [ ] Images optimized and loading correctly
- [ ] Mobile view tested on real device (or DevTools 360px mode)
- [ ] Keyboard navigation working (Tab through nav, expand details)
- [ ] Color contrast checked (use WebAIM tool)
- [ ] Form/email links functional
- [ ] OG tags tested (share link on Twitter/LinkedIn)
- [ ] Lighthouse score ≥ 90 on all metrics
- [ ] Load time < 2s on 4G network
- [ ] No console errors in DevTools

---

## 🔐 Privacy & Security

- No external analytics (no tracking)
- No cookies set
- mailto: links are client-side only
- CV/transcripts not publicly accessible
- Thesis content summarized only (code private)

---

## 📧 Contact

- Email: al.chigvintseva@gmail.com
- GitHub: https://github.com/chigvintseva
- LinkedIn: https://linkedin.com/in/alena-chigvintseva

---

## 📄 License

This portfolio is personal and not licensed for reuse. Feel free to use it as inspiration for your own portfolio, but please do not copy the content or design directly.

---

**Last updated**: Feb 2026  
**Built with**: ❤️ and vanilla HTML/CSS/JS
