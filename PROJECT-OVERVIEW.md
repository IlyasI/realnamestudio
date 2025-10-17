# realname studio - Complete Project Overview

**Live Sites:**
- https://realnamestudio.com
- https://realname.studio

**Repository:** https://github.com/IlyasI/realnamestudio

**Created:** October 17, 2025

---

## 📋 Table of Contents

1. [Project Summary](#project-summary)
2. [Tech Stack](#tech-stack)
3. [Site Structure](#site-structure)
4. [Design System](#design-system)
5. [Features](#features)
6. [Hosting & Infrastructure](#hosting--infrastructure)
7. [Email Setup](#email-setup)
8. [Development Workflow](#development-workflow)
9. [Mobile Optimization](#mobile-optimization)
10. [Performance](#performance)
11. [Future Plans](#future-plans)

---

## 📝 Project Summary

**realname studio** is a portfolio/dev studio website showcasing projects built in Brooklyn. The site features a neo-brutalist design with vibrant colors, bold typography, and interactive animations.

### **Purpose:**
- Portfolio hub for projects
- Contact point for collaborations
- Brand presence for realname studio

### **Target Audience:**
- Potential clients
- Collaborators
- Other developers/designers
- Anyone interested in Brooklyn tech/culture

---

## 🛠️ Tech Stack

### **Frontend:**
- **HTML5** - Semantic markup
- **CSS3** - Embedded styles, no preprocessor
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Bebas Neue, Space Grotesk

### **Backend:**
- **Node.js** v20+ - Runtime
- **Express.js** v4.18.2 - Web server
- **Static file serving** - `express.static('public')`

### **Hosting:**
- **Vercel** - Edge network deployment
- **GitHub** - Version control & CI/CD
- **Namecheap** - Domain registrar
- **Namecheap Private Email** - Email hosting

### **Development:**
- **Git** - Version control
- **npm** - Package management
- **nodemon** - Dev server (local)
- **Vercel CLI** - Deployment tool

---

## 🏗️ Site Structure

```
/home/ilyas/realnamestudio/
├── public/                  # Static files served by Express
│   ├── index.html          # Homepage (main entry point)
│   └── contact.html        # Contact page
├── server.js               # Express server
├── package.json            # Dependencies & scripts
├── package-lock.json       # Locked dependencies
├── .gitignore             # Git ignore rules
├── .vercel/               # Vercel deployment config
├── ROADMAP.md             # Future plans & enhancements
├── DEPLOYMENT.md          # Deployment guide
├── EMAIL-SETUP.md         # Email configuration guide
└── PROJECT-OVERVIEW.md    # This file
```

### **Page Structure:**

#### **index.html** (Homepage)
- Hero section with parallax shapes
- Logo with layered text shadows
- CTA buttons (BUILDS, CONNECT)
- Scroll indicator
- Builds section with project grid
- Modal popup for project details
- Floating "HEY" button
- Footer with links

#### **contact.html** (Contact Page)
- Hero with floating shapes
- Contact methods (email links)
- Social links (GitHub, Twitter)
- Back button to homepage

---

## 🎨 Design System

### **Color Palette:**
```css
Primary Purple: #6B4C9A
Hot Pink: #FF006E
Cyan: #00D9FF
Orange: #FF6B35
Cream/Off-White: #F5F1E8
Black: #1A1A1A
White: #FFFFFF
```

### **Typography:**

**Headings:**
- Font: Bebas Neue (Google Fonts)
- Weight: Regular
- Style: All caps, high letter-spacing
- Usage: Titles, buttons, navigation

**Body Text:**
- Font: Space Grotesk (Google Fonts)
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Usage: Paragraphs, descriptions, UI text

### **Design Philosophy:**

**Neo-Brutalism:**
- Bold black borders (4-6px)
- High contrast colors
- Layered drop shadows
- No subtle gradients (except backgrounds)
- Geometric shapes
- Playful, energetic vibe

**Influences:**
- Brooklyn street art
- 90s web design
- Brutalist architecture
- Hip-hop culture

---

## ✨ Features

### **Interactive Elements:**

1. **Parallax Background Shapes**
   - 5 geometric shapes (circles, squares, diamonds)
   - Follow mouse movement
   - Respond to touch on mobile
   - Move with scroll (fade upward)
   - Different speeds for depth effect

2. **Hero Logo**
   - Layered text shadows (purple → pink → cyan)
   - Hover effect shifts shadow depth
   - Spinning accent square

3. **Navigation Buttons**
   - Underline animation
   - Arrow slides in on hover
   - Smooth color transitions

4. **Scroll Indicator**
   - Animated bouncing arrow
   - Click to scroll to BUILDS section
   - Smooth scroll behavior

5. **Project Cards**
   - Grid layout (responsive)
   - Hover effects: scale, rotate, glow
   - Icon spins 360° on hover
   - Gradient fill animation
   - "TAP" hint on mobile
   - Pulsing glow on touch devices

6. **Project Modal**
   - Full-screen overlay
   - Slide-up animation
   - Project details, tags, link
   - Close button with rotate animation
   - Escape key support

7. **Floating Action Button (FAB)**
   - Fixed position (bottom right)
   - Pulsing animation
   - "HEY" text links to contact
   - Hover: scale + color change

### **Animations:**

- **float** - Smooth up/down movement
- **spin** - 360° continuous rotation
- **pulse** - Pulsing shadow/glow
- **bounce** - Vertical bouncing
- **glitch** - Text glitch effect (BUILDS title)
- **slideWidth** - Width animation
- **mobileGlow** - Pulsing card glow on mobile
- **tapPulse** - TAP text pulse
- **fadeIn** - Opacity fade in
- **slideUp** - Slide from bottom

### **Accessibility:**

- Semantic HTML5 elements
- `alt` text for interactive elements
- Keyboard navigation support
- Focus states on interactive elements
- `prefers-reduced-motion` support (disables animations)
- High contrast color scheme
- Readable font sizes

---

## 🌐 Hosting & Infrastructure

### **Domain Setup:**

**Domains:**
- realnamestudio.com (primary)
- realname.studio (alias)
- Both point to same Vercel deployment

**Registrar:** Namecheap
**DNS Configuration:**
```
Type: A Record
Host: @
Value: 76.76.21.21 (Vercel IP)

Type: A Record
Host: www
Value: 76.76.21.21 (Vercel IP)
```

### **Vercel Deployment:**

**Project:** realnamestudio
**Framework:** Other (Express.js)
**Build Command:** None
**Output Directory:** public
**Install Command:** npm install
**Dev Command:** npm start

**Deployment Trigger:**
- Auto-deploys on push to `main` branch
- GitHub webhook → Vercel builds → Live in ~30 seconds

**Features:**
- Edge network (global CDN)
- Automatic SSL certificates
- Preview deployments for branches
- Environment variables support
- Analytics available

**URLs:**
- Production: https://realnamestudio.com, https://realname.studio
- Vercel URL: https://realnamestudio-[hash].vercel.app

---

## 📧 Email Setup

**Provider:** Namecheap Private Email

**Primary Mailbox:**
- hello@realnamestudio.com
- Full send/receive capabilities
- $1.58/month

**Email Forwarding:**
- hello@realname.studio → hello@realnamestudio.com
- Free via Namecheap

**Access:**
- Webmail: https://privateemail.com
- IMAP/SMTP available for apps

See **EMAIL-SETUP.md** for full configuration details.

---

## 💻 Development Workflow

### **Local Development:**

```bash
# Clone repository
git clone https://github.com/IlyasI/realnamestudio.git
cd realnamestudio

# Install dependencies
npm install

# Start dev server
npm start
# Server runs on http://localhost:3000

# Make changes to files in public/
# Refresh browser to see changes
```

### **Git Workflow:**

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# Vercel automatically deploys
# Live in ~30 seconds
```

### **Branching Strategy:**

- **main** - Production branch (auto-deploys)
- Feature branches for testing (create preview deployments)
- No staging environment (small project)

### **Code Style:**

- Embedded CSS (no separate files)
- Inline JavaScript (no separate files)
- Indentation: 2 spaces
- Comments for major sections
- Semantic HTML5

---

## 📱 Mobile Optimization

### **Responsive Breakpoints:**

```css
/* Desktop: Default (1024px+) */

/* Tablet */
@media (max-width: 768px) {
  /* Adjusted sizing, padding */
}

/* Small Phones */
@media (max-width: 480px) {
  /* Compact layout, smaller text */
}

/* Landscape Orientation */
@media (max-height: 600px) and (orientation: landscape) {
  /* Adjusted for short viewports */
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  /* Disable animations */
}
```

### **Mobile-Specific Features:**

1. **Touch-Responsive Shapes**
   - touchmove event listener
   - touchstart event listener
   - Shapes follow finger movement

2. **Touch Device Detection**
   - `@media (hover: none) and (pointer: coarse)`
   - Shows "TAP" hint instead of arrow
   - Enhanced glow effects
   - No hover-dependent interactions

3. **Viewport Optimization**
   - Hero section fits 100vh
   - Scroll indicator always visible
   - Compact card sizing (280-320px)
   - Horizontal footer (saves space)

4. **Performance**
   - Smaller background shapes on mobile
   - Reduced animation complexity
   - Optimized touch event handling

---

## ⚡ Performance

### **Current Metrics:**

**Lighthouse Scores (Target):**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### **Optimizations:**

1. **Minimal Dependencies**
   - No frameworks (React, Vue, etc.)
   - Vanilla JS only
   - Small bundle size

2. **Font Loading**
   - Google Fonts with preconnect
   - font-display: swap
   - Only 2 font families

3. **No Images**
   - Pure CSS/HTML design
   - No image loading overhead
   - Faster initial load

4. **Edge Delivery**
   - Vercel CDN
   - Global edge network
   - HTTPS/2

5. **CSS Optimization**
   - Embedded styles (one HTTP request)
   - Minimal CSS (inline)
   - Efficient selectors

### **Future Optimizations:**

- Add meta tags for SEO
- Implement service worker for offline
- Add analytics (Vercel Analytics)
- Compress/minify for production

---

## 📊 Analytics & Monitoring

### **Current Setup:**
- No analytics installed yet

### **Planned:**
- Vercel Analytics (built-in, privacy-friendly)
- Track page views, button clicks, project card interactions
- Monitor performance metrics

### **Goals to Track:**
- Unique visitors per month
- Bounce rate
- Time on site
- Project card click-through rate
- Contact link clicks

---

## 🔐 Security

### **Current Security:**

1. **HTTPS/SSL**
   - Auto-provisioned by Vercel
   - Force HTTPS redirects
   - Valid certificates for both domains

2. **No User Input**
   - No forms (no XSS risk)
   - No database (no SQL injection)
   - Static content only

3. **Email Security**
   - SPF records configured
   - DKIM via Namecheap
   - Password-protected mailbox

4. **Dependencies**
   - Only Express (well-maintained)
   - Regular updates via `npm audit`

### **Best Practices:**

- Regular dependency updates
- Monitor for security advisories
- Use environment variables for secrets (if needed)
- Keep Vercel/GitHub accounts secure (2FA)

---

## 🚀 Future Plans

See **ROADMAP.md** for comprehensive future plans.

### **Near Term (1-3 months):**

**Content:**
- [ ] Add more projects to BUILDS section
- [ ] Update Brooklyn Sounds with live URL
- [ ] Add project screenshots
- [ ] Write real project descriptions

**Features:**
- [ ] Add meta tags for SEO
- [ ] Open Graph tags for social sharing
- [ ] Custom 404 page
- [ ] About section
- [ ] Blog (optional)

**Technical:**
- [ ] Add analytics
- [ ] Performance monitoring
- [ ] Sitemap.xml

### **Medium Term (3-6 months):**

- Add case studies for projects
- Newsletter signup (if desired)
- Testimonials section
- More interactive features

### **Long Term (6+ months):**

- Consider CMS for easier content updates
- Open source some projects
- Community features
- Advanced animations/WebGL

---

## 📚 Documentation Files

### **Current Documentation:**

1. **ROADMAP.md** - Future plans and strategy
2. **DEPLOYMENT.md** - Deployment guide (Vercel)
3. **EMAIL-SETUP.md** - Email configuration
4. **PROJECT-OVERVIEW.md** - This file (complete overview)

### **Missing Documentation:**

- [ ] CONTRIBUTING.md (if open sourcing)
- [ ] CODE_OF_CONDUCT.md (if open sourcing)
- [ ] CHANGELOG.md (version history)

---

## 🛠️ Maintenance

### **Regular Tasks:**

**Weekly:**
- Monitor email inbox
- Check Vercel deployment status
- Review analytics (once set up)

**Monthly:**
- Update dependencies (`npm update`)
- Check for security advisories (`npm audit`)
- Review and respond to emails

**Quarterly:**
- Review and update content
- Add new projects
- Refresh design if needed

**Yearly:**
- Renew domains (auto-renews)
- Renew email ($19/year)
- Major feature updates

---

## 🐛 Known Issues

### **Current Issues:**

1. **realnamestudio.com DNS**
   - May still be propagating for some users
   - Should resolve within 24-48 hours
   - realname.studio works perfectly

2. **Email Reply-From**
   - Replies always from hello@realnamestudio.com
   - Even if original sent to hello@realname.studio
   - Non-issue for most users

### **Non-Issues (By Design):**

- Single project shown (intentional, will add more)
- Simple footer (minimalist design)
- No dark mode (intentional aesthetic)
- No framework (performance choice)

---

## 💡 Key Learnings

### **What Went Well:**

- ✅ Neo-brutalist design is unique and eye-catching
- ✅ Vercel deployment was seamless
- ✅ Mobile optimization works great
- ✅ Touch interactions on mobile feel polished
- ✅ Email setup was straightforward
- ✅ Auto-deployments save time

### **Challenges Overcome:**

- DNS propagation delays (patience required)
- Mobile viewport fitting (padding adjustments)
- Touch event handling (added touchmove/touchstart)
- Email hosting decision (chose cost-effective option)
- Card sizing on mobile (multiple iterations)

### **What Would Be Done Differently:**

- Add analytics from day one
- Use CSS variables for colors (easier theming)
- Plan content before building (had to iterate)
- Test on real devices earlier

---

## 📞 Support & Resources

### **Getting Help:**

**Vercel:**
- Docs: https://vercel.com/docs
- Support: support@vercel.com
- Dashboard: https://vercel.com

**Namecheap:**
- Docs: https://www.namecheap.com/support/
- Live Chat: Available 24/7
- Dashboard: https://www.namecheap.com

**Email Issues:**
- Private Email Support: https://www.namecheap.com/support/knowledgebase/subcategory/89/private-email/

**Coding Help:**
- MDN Web Docs: https://developer.mozilla.org/
- Stack Overflow: https://stackoverflow.com/
- Express.js Docs: https://expressjs.com/

---

## ✅ Launch Checklist

- [x] Design completed
- [x] Homepage built
- [x] Contact page built
- [x] Mobile responsive
- [x] GitHub repository created
- [x] Deployed to Vercel
- [x] DNS configured (both domains)
- [x] SSL certificates active
- [x] Email configured
- [x] Email forwarding set up
- [x] Touch interactions working
- [x] All documentation written
- [ ] Analytics added
- [ ] Meta tags for SEO
- [ ] Test emails sent/received
- [ ] Shared on social media
- [ ] realnamestudio.com fully propagated

---

## 🎉 Summary

**realname studio** is a fully functional, mobile-optimized portfolio site with:
- Unique neo-brutalist design
- Interactive animations
- Touch-responsive elements
- Working email at both domains
- Auto-deployment on git push
- Professional hosting on Vercel
- Comprehensive documentation

**Total Cost:** ~$40/year
- Domains: ~$20/year
- Email: ~$19/year
- Hosting: $0 (Vercel free tier)

**Time to Build:** ~1 day
**Time to Deploy:** ~5 minutes
**Time to Maintain:** ~1 hour/month

---

*Last Updated: 2025-10-17*

*Built with ♥ in Brooklyn*
