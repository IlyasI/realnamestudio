# Linting & Code Quality Setup

This document explains the free linting and automated code review tools set up for Real Name Studio.

## 🛠️ Tools Installed (All FREE)

### 1. **ESLint** - JavaScript Linting
- Lints JavaScript code in `.js` files and `<script>` tags in HTML
- Catches common errors and enforces best practices
- 60M+ downloads per week on npm

### 2. **Prettier** - Code Formatting
- Auto-formats JavaScript, HTML, CSS, JSON, and Markdown
- Ensures consistent code style across the team
- Works with ESLint to avoid conflicts

### 3. **stylelint** - CSS Linting
- Lints CSS in `.css` files and `<style>` tags in HTML
- Catches CSS errors and enforces standards
- Supports modern CSS features

### 4. **HTMLHint** - HTML Linting
- Validates HTML structure and best practices
- Checks for accessibility issues
- Ensures semantic HTML

### 5. **reviewdog** - Automated PR Reviews
- Automatically comments on PRs with linting issues
- Runs on GitHub Actions (free for public repos)
- Provides inline code suggestions

---

## 📋 Available Commands

### Run All Linters
```bash
npm run lint
```
Runs ESLint, stylelint, and HTMLHint on all files.

### Run Individual Linters
```bash
npm run lint:js      # ESLint (JavaScript)
npm run lint:css     # stylelint (CSS)
npm run lint:html    # HTMLHint (HTML)
```

### Auto-Fix Issues
```bash
npm run lint:fix
```
Automatically fixes all auto-fixable linting issues.

### Format Code
```bash
npm run format       # Format all files with Prettier
npm run format:check # Check if files are formatted
```

---

## 🤖 Automated GitHub Actions

### On Every Push & Pull Request

The `.github/workflows/lint.yml` workflow automatically:
1. ✅ Runs ESLint on JavaScript
2. ✅ Runs stylelint on CSS
3. ✅ Runs HTMLHint on HTML
4. ✅ Checks code formatting with Prettier
5. ✅ Posts review comments on PRs (via reviewdog)

**All of this is FREE for public and private repos!**

---

## 🎯 What Gets Linted

### JavaScript Files
- `**/*.js` - All JavaScript files
- `<script>` tags in HTML files

**Rules:**
- No unused variables
- Use `const` and `let` instead of `var`
- Always use `===` instead of `==`
- No `eval()`
- Prefer arrow functions
- Async/await best practices

### CSS Files
- `**/*.css` - All CSS files
- `<style>` tags in HTML files

**Rules:**
- Valid CSS syntax
- Consistent formatting
- No duplicate selectors
- Proper color formats

### HTML Files
- `**/*.html` - All HTML files

**Rules:**
- Valid HTML5 structure
- Required attributes (`alt` on images, `title` on page)
- No duplicate IDs
- Proper nesting
- Accessibility checks

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `eslint.config.js` | ESLint rules for JavaScript |
| `.prettierrc.json` | Prettier formatting rules |
| `.prettierignore` | Files to exclude from formatting |
| `.stylelintrc.json` | stylelint rules for CSS |
| `.htmlhintrc` | HTMLHint rules for HTML |
| `.github/workflows/lint.yml` | GitHub Actions automation |

---

## 🚀 How to Use

### Before Committing
```bash
# Check for issues
npm run lint

# Auto-fix what can be fixed
npm run lint:fix

# Format all code
npm run format
```

### During Development

1. **Install a linter extension in your editor:**
   - VS Code: ESLint, Prettier, stylelint extensions
   - WebStorm: Built-in support

2. **Enable format on save** in your editor

3. **Run linters before committing**

### On Pull Requests

GitHub Actions will automatically:
- Run all linters
- Post comments on your PR with any issues
- Show passing/failing checks

**No setup required - it's automatic!**

---

## 🆓 Why These Tools?

All tools are:
- ✅ **100% Free** - No paid plans required
- ✅ **Open Source** - Community maintained
- ✅ **Industry Standard** - Used by millions
- ✅ **GitHub Actions Compatible** - Free automation

### Cost Breakdown
- ESLint: **FREE** ✅
- Prettier: **FREE** ✅
- stylelint: **FREE** ✅
- HTMLHint: **FREE** ✅
- reviewdog: **FREE** ✅
- GitHub Actions: **FREE** for public repos, 2000 min/month for private ✅

**Total cost: $0/month** 💰

---

## 📚 Linting Rules

### JavaScript Rules (ESLint)

**Errors (must fix):**
- `no-undef` - No undefined variables
- `no-duplicate-imports` - No duplicate imports
- `eqeqeq` - Always use `===`
- `no-var` - Use `let` or `const`
- `no-eval` - Never use `eval()`

**Warnings (should fix):**
- `no-unused-vars` - Remove unused variables
- `prefer-const` - Use `const` when possible
- `prefer-arrow-callback` - Use arrow functions
- `require-await` - `async` functions should use `await`

### CSS Rules (stylelint)

Based on `stylelint-config-standard`:
- Valid CSS syntax
- No duplicate selectors
- Proper color notation
- Consistent formatting
- Modern CSS support

### HTML Rules (HTMLHint)

- Valid HTML5 doctype
- Lowercase tag names
- Proper attribute quoting
- No duplicate attributes
- Required `alt` on images
- Required `title` on page
- No duplicate IDs

---

## 🎨 Prettier Formatting

Prettier auto-formats:
- **JavaScript** - Consistent syntax
- **HTML** - Proper indentation
- **CSS** - Organized properties
- **JSON** - Pretty print
- **Markdown** - Clean formatting

**Settings:**
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- 100 character line width
- Trailing commas in ES5

---

## 🔍 VS Code Integration

### Recommended Extensions

Install these in VS Code:
```
dbaeumer.vscode-eslint
esbenp.prettier-vscode
stylelint.vscode-stylelint
HTMLHint.vscode-htmlhint
```

### Settings (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

---

## 🐛 Troubleshooting

### "ESLint couldn't find the plugin"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Prettier isn't formatting"
Make sure your editor is set to use Prettier as the default formatter.

### "GitHub Actions failing"
Check the Actions tab in your repo for detailed error logs.

### "Too many linting errors"
Run `npm run lint:fix` to auto-fix most issues.

---

## 📖 Learn More

- **ESLint:** https://eslint.org/docs/latest/
- **Prettier:** https://prettier.io/docs/en/
- **stylelint:** https://stylelint.io/
- **HTMLHint:** https://htmlhint.com/
- **reviewdog:** https://github.com/reviewdog/reviewdog

---

## ✅ Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run linters:**
   ```bash
   npm run lint
   ```

3. **Fix issues:**
   ```bash
   npm run lint:fix
   npm run format
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Fix linting issues"
   git push
   ```

5. **GitHub Actions will run automatically** ✅

---

**That's it! Your code is now automatically linted and reviewed for FREE.** 🎉
