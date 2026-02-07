
# Portfolio – Deployment & QA Guide

## ✅ PRE-DEPLOYMENT CHECKLIST

### 🔗 Links & Content

- [ ] All GitHub links working (projects, profile)
- [ ] LinkedIn URL correct (`https://linkedin.com/in/alena-chigvintseva`)
- [ ] Email link functional (`mailto:al.chigvintseva@gmail.com`)
- [ ] External project links tested:
  - [ ] `push_swap` GitHub link works
  - [ ] `to-do-list` demo link works
  - [ ] Any other public repo links verified
- [ ] No broken relative links (`/images/`, `/css/`, `/js/`)
- [ ] No "Coming soon" or placeholder text in live sections

### 📱 Mobile Responsiveness

**Test on real devices or Chrome DevTools (360px viewport):**

- [ ] Navigation menu readable and clickable on 360px width
- [ ] Hero avatar and text centered, no overflow
- [ ] All buttons touch-friendly (minimum 44px height)
- [ ] Expandable details (`<details>`) work on mobile
- [ ] Text is readable without horizontal scrolling
- [ ] Images scale correctly at 640px, 768px, and 1024px breakpoints

**DevTools Test Steps:**
```
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Set to "iPhone SE" (360x667)
4. Scroll through entire page
5. Test: click navigation links, expand details, hover buttons
6. Test on "iPad" (768px) and "Desktop" (1200px)
```

### ♿ Accessibility

- [ ] Keyboard navigation works (Tab through all interactive elements)
  - Can focus nav links
  - Can expand `<details>` with Space/Enter
  - Can activate buttons with Enter
- [ ] Focus outline visible and clear (should be blue)
- [ ] Skip-to-content link works (press Tab at page load)
- [ ] Images have alt text
- [ ] Heading hierarchy correct: h1 (once) → h2 (multiple) → h3 (optional)
- [ ] Color contrast ≥ 4.5:1 (test with WebAIM Contrast Checker)
  - Text on dark background: #e5e5e5 on #0f0f0f ✅
  - Accent red: #e84855 on #1a1a1a ✅
- [ ] No ARIA overuse; semantic HTML preferred
- [ ] Form email link functional

**Accessibility Test Tools:**
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse in Chrome DevTools](chrome://inspect)

### 📊 Performance

- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Page load time < 2s on 4G throttling (DevTools Network tab)
- [ ] Images optimized (avatar.jpg ~50KB max)
- [ ] No console errors (DevTools → Console tab)
- [ ] No console warnings (besides harmless third-party scripts, if any)
- [ ] CSS and JS minified or reasonably sized

**Performance Test Steps:**
```
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Review report (target: all metrics ≥ 90)
5. Go to Network tab, reload, check file sizes
6. Go to Console tab, check for errors
```

### 🔍 SEO

- [ ] Page title in browser tab is correct: "Alena Chigvintseva - Full-Stack Developer, 42 Berlin"
- [ ] Meta description present and compelling (visible in Google search results preview)
- [ ] OpenGraph tags correct (share on LinkedIn/Twitter test):
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (avatar.jpg)
  - [ ] og:url
- [ ] Favicon displays in browser tab (should be "AC" in red)
- [ ] Heading hierarchy follows: h1 (name) → h2 (section titles)
- [ ] No duplicate h1 tags

**SEO Test Tools:**
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [SEO Meta in Hand](https://chrome.google.com/webstore/detail/seo-meta-in-hand/illogikal)

### 🎨 Design & Visuals

- [ ] Red accent (#e84855) is consistent (nav underlines, links, buttons)
- [ ] Dark theme (#0f0f0f, #1a1a1a) looks professional and not eye-strain
- [ ] Profile photo (avatar.jpg) displays correctly and is cropped nicely
- [ ] Buttons have hover states (color + shadow + transform)
- [ ] Project cards have hover states (shadow + transform)
- [ ] Navigation sticky on scroll (stays at top)
- [ ] Smooth scrolling when clicking nav links

### 🔗 Social Sharing

- [ ] Test on Twitter:
  1. Copy live URL
  2. Go to https://twitter.com/intent/tweet?url=YOUR_URL
  3. Check preview: title, description, image display correctly
- [ ] Test on LinkedIn:
  1. Share button → Paste URL
  2. Check preview: title, description, image correct

---

## 🚀 DEPLOYMENT STEPS

### Option 1: GitHub Pages (Recommended)

**Prerequisites:**
- Repository is public
- GitHub account with pages enabled

**Steps:**

1. **Ensure main branch is ready:**
   ```bash
   git checkout main
   ```

2. **Merge new-version branch (after QA passes):**
   ```bash
   git merge new-version
   ```

3. **Delete feature branch:**
   ```bash
   git branch -d new-version
   ```

4. **Push to GitHub:**
   ```bash
   git push origin main
   ```

5. **Enable GitHub Pages (if not already):**
   - Go to repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

6. **Wait 2–3 minutes:**
   - GitHub builds and deploys automatically
   - Check: https://github.com/chigvintseva/personal-portfolio-website/deployments

7. **Verify live:**
   - Visit: https://chigvintseva.github.io/personal-portfolio-website/
   - Check all links and features work

### Option 2: Netlify (Alternative)

**Steps:**

1. **Connect repo:**
   - Go to https://app.netlify.com
   - New site → Import an existing project
   - Select GitHub, authorize, select repo

2. **Configure build:**
   - Build command: (leave empty)
   - Publish directory: `/` (root)
   - Deploy

3. **Custom domain (optional):**
   - Domain settings → Add custom domain
   - Update DNS at domain registrar

4. **Verify deployment:**
   - Netlify dashboard shows "Published"
   - Site is live at generated URL or custom domain

---

## 🐛 TROUBLESHOOTING

### Images not loading

**Issue:** Avatar or project images show broken icon

**Solutions:**
- Check image path in HTML (should be `images/avatar.jpg`)
- Ensure file exists in `/images/` folder
- Check file extension matches (.jpg, not .jpeg)
- Try clearing browser cache (Ctrl+Shift+Delete)

### Styles not applying

**Issue:** Page looks unstyled or colors are wrong

**Solutions:**
- Check CSS path in HTML: `<link rel="stylesheet" href="css/styles.css">`
- Hard refresh browser (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac)
- Check DevTools Network tab – ensure css/styles.css loads (200 status)
- Verify no CSS is cached by CDN

### JavaScript not working (expandable details, scroll spy)

**Issue:** `<details>` not expanding, nav links don't highlight

**Solutions:**
- Check browser console (DevTools → Console tab)
- Ensure `js/main.js` and `content/projects.js` load (Network tab)
- Check for JavaScript errors in console
- Try disabling browser extensions (can block scripts)

### Links open but GitHub/LinkedIn don't load

**Issue:** Href links work but destination isn't accessible

**Solutions:**
- Verify URLs are correct (no typos)
- Check LinkedIn URL format: `https://linkedin.com/in/alena-chigvintseva` (not `/in/` vs `/company/`)
- GitHub profile: `https://github.com/chigvintseva`
- Email link: `mailto:al.chigvintseva@gmail.com`

### Page doesn't rank on Google

**Issue:** Portfolio not appearing in search results

**Solutions:**
- Google indexing is not instant (can take 1–2 weeks)
- Submit to Google Search Console: https://search.google.com/search-console
- Verify site is public (not robots.txt blocked)
- Check meta tags are correct
- Wait for Google crawler to index

---

## 📋 POST-LAUNCH TASKS

- [ ] Submit portfolio URL to Google Search Console
- [ ] Share on LinkedIn (include portfolio link)
- [ ] Update GitHub profile with portfolio link
- [ ] Monitor analytics (if you add Plausible/Fathom later)
- [ ] Ask for feedback from friends/mentors
- [ ] Update portfolio when you finish green-screen project or new projects

---

## 🎯 SUCCESS CRITERIA

✅ **You're done when:**
1. All pre-deployment checks pass
2. Mobile view works flawlessly on real device
3. Lighthouse reports ≥ 90 on all metrics
4. All links are working
5. Accessibility audit passes (no errors in WAVE)
6. Site is live on GitHub Pages
7. You can share the URL with confidence

---

## 📞 SUPPORT

If something breaks:
1. Check console for errors (F12 → Console)
2. Verify file paths are correct
3. Clear browser cache (Ctrl+Shift+Delete)
4. Test in incognito/private mode
5. Try a different browser

**Contact:** al.chigvintseva@gmail.com

---

**Good luck with your portfolio launch! 🚀**

