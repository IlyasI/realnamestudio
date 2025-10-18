# realname studio

we build cool stuff

## Setup

```bash
npm install
npm start
```

Visit `http://localhost:3000`

## Domains

- realnamestudio.com
- realname.studio

## Style

Inspired by Brooklyn Sounds map - neo-brutalist aesthetic with bold borders, fun colors, and playful animations.

## Tech Stack

- Express.js server
- Pure HTML/CSS/JS (no framework needed)
- Custom animations and interactions
- Playwright for automated screenshots

## Adding New Projects

### 1. Add Project Card to HTML

Edit `public/index.html` and add a new card in the `sites-grid`:

```html
<!-- For completed projects -->
<div class="site-item" data-site="your-project-id">
  <div class="site-marker">
    <div class="site-icon">🚀</div>
    <h3>PROJECT<br>NAME</h3>
  </div>
</div>

<!-- For in-progress projects (with Dusen Dusen tape) -->
<div class="site-item" data-site="your-project-id">
  <div class="site-marker in-progress">
    <div class="progress-badge">SOON</div>
    <div class="site-icon">🚀</div>
    <h3>PROJECT<br>NAME</h3>
    <div class="tape tape-1">IN PROGRESS</div>
    <div class="tape tape-2">COMING SOON</div>
  </div>
</div>
```

### 2. Add Project Data to JavaScript

In the `sites` object in `public/index.html`:

```javascript
const sites = {
  'your-project-id': {
    name: 'Project Name',
    description: 'Project description here...',
    tags: ['Tech', 'Stack', 'Tags'],
    url: 'https://your-project-url.com',
    screenshot: '/screenshots/your-project.jpg'
  }
};
```

### 3. Capture Screenshot Automatically

Update `screenshot.js` to capture your project screenshot:

```javascript
// Add to the script
await page.goto('https://your-project-url.com', {
  waitUntil: 'networkidle',
  timeout: 30000
});

await page.screenshot({
  path: './public/screenshots/your-project.jpg',
  type: 'jpeg',
  quality: 90
});
```

Then run:
```bash
node screenshot.js
```

Or manually add a screenshot (1200x800px recommended) to `/public/screenshots/`

### 4. Refresh the Site

The dev server will auto-reload, or restart with `npm start`

## Automated Screenshot Updates (CI/CD)

Screenshots are automatically captured and updated via GitHub Actions:

### When Screenshots Update:
- **On every push to main** - After tests pass, screenshots are refreshed
- **Weekly on Mondays at 9am UTC** - Scheduled automatic refresh
- **Manual trigger** - Run workflow manually from GitHub Actions tab

### How It Works:
1. GitHub Actions runs `screenshot.js` using Playwright
2. Screenshots are captured from live production sites
3. New screenshots are committed back to the repo with `[skip ci]`
4. Vercel automatically deploys with updated screenshots

### Manual Screenshot Refresh:
```bash
# Locally
node screenshot.js

# Via GitHub Actions
# Go to Actions tab → "Test and Deploy" → Run workflow
```

Screenshots are stored in `/public/screenshots/` and versioned with git.
