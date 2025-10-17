# GitHub Organization Setup Guide - realnamestudios

## 🎨 Step 1: Upload Profile Picture

1. Go to https://github.com/orgs/realnamestudios/settings/profile
2. Click **Upload new picture**
3. Choose one of the avatar options:
   - **avatar-1-monogram.svg** - Layered "RS" with shadow effect (RECOMMENDED)
   - **avatar-2-geometric.svg** - Colorful geometric shapes
   - **avatar-3-minimal.svg** - Clean minimal "RN STUDIOS"
4. Click **Set new profile picture**

### Converting SVG to PNG (if GitHub requires PNG):
```bash
# If you need to convert SVG to PNG, use this online tool:
# https://cloudconvert.com/svg-to-png
# Upload the SVG, download as PNG 400x400px
```

---

## 📝 Step 2: Create Organization Profile README

This special README shows up on your org's main page (https://github.com/realnamestudios)

### Method 1: Via Web Interface

1. Go to https://github.com/orgs/realnamestudios/repositories
2. Click **New repository**
3. Repository name: `realnamestudios` (MUST match org name exactly)
4. Description: `Organization profile and project showcase`
5. Choose **Public**
6. Check ✅ **Add a README file**
7. Click **Create repository**
8. Click on the README.md file
9. Click the **pencil icon** (Edit this file)
10. Replace contents with the text from `org-branding/ORG-README.md`
11. Commit changes

### Method 2: Via Command Line (if you prefer)

```bash
# Navigate to a workspace directory
cd ~/realnamestudio

# Create and clone the special profile repo
gh repo create realnamestudios/realnamestudios --public --description "Organization profile" --clone

# Navigate into it
cd realnamestudios

# Copy the README
cp ../org-branding/ORG-README.md README.md

# Commit and push
git add README.md
git commit -m "Add organization profile README"
git push
```

---

## 🔧 Step 3: Configure Organization Profile

Go to https://github.com/orgs/realnamestudios/settings/profile

### **Public profile:**

**Display name:** `realname studios`

**Email:** `hello@realnamestudio.com`

**URL:** `https://realname.studio`

**Location:** `Brooklyn, NY`

**Bio:**
```
Brooklyn-based dev studio building experimental digital experiences. We create interactive projects that celebrate local culture and push creative boundaries.
```

**Twitter/X username:** `@realnamestudio` (once you create it)

---

## 👥 Step 4: Organization Settings

### **Member privileges** (if you plan to add collaborators):
Go to https://github.com/orgs/realnamestudios/settings/member_privileges

- Base permissions: **Read** (or Write if you want more access)
- Repository creation: Allow members to create **public** repositories

### **Verified domains** (optional but professional):
Go to https://github.com/orgs/realnamestudios/settings/domains

Add: `realnamestudio.com` and `realname.studio`

This shows a verified badge next to your org!

---

## 📌 Step 5: Pin Repositories (when you move them)

Once you transfer repos to the org, pin the best ones:

1. Go to https://github.com/realnamestudios
2. Click **Customize pins**
3. Select up to 6 repositories to showcase:
   - realnamestudio (the website)
   - brooklyn-sounds
   - future projects...
4. Click **Save pins**

---

## 🌟 Step 6: Add Social Links

Go to https://github.com/orgs/realnamestudios/settings/profile

Scroll to **Social accounts** and add:
- Twitter: `@realnamestudio`
- Website: `realname.studio`
- Email: `hello@realnamestudio.com`

---

## 📱 Step 7: Create Twitter Account (Optional)

See main PROJECT-OVERVIEW.md for detailed Twitter setup.

Quick version:
1. Sign up at twitter.com with `hello@realnamestudio.com`
2. Username: `@realnamestudio`
3. Bio: `Brooklyn-based dev studio → realname.studio`
4. Header: Screenshot of your website hero
5. Profile pic: Same avatar as GitHub org

---

## ✅ Final Checklist

- [ ] Profile picture uploaded
- [ ] Profile README created (realnamestudios/realnamestudios repo)
- [ ] Display name set to "realname studios"
- [ ] Bio added
- [ ] Website URL added (realname.studio)
- [ ] Location set (Brooklyn, NY)
- [ ] Email set (hello@realnamestudio.com)
- [ ] Twitter linked (once created)
- [ ] Domains verified (optional)
- [ ] Repositories pinned (when transferred)

---

## 🔗 Quick Links

- **Org Profile:** https://github.com/realnamestudios
- **Org Settings:** https://github.com/orgs/realnamestudios/settings
- **Your Repos:** https://github.com/orgs/realnamestudios/repositories

---

## 🎨 Avatar Previews

**Option 1: Monogram (RECOMMENDED)**
- Bold "RS" with layered cyan/pink/purple shadows
- Clean cream background
- Matches website aesthetic perfectly

**Option 2: Geometric**
- Colorful shapes (circle, square, triangle)
- Purple background
- More playful and artistic

**Option 3: Minimal**
- "RN STUDIOS" on black
- Cyan accents with rotated square
- Sleek and modern

---

*All branding materials match your site's neo-brutalist design: bold borders, layered shadows, vibrant colors (#6B4C9A, #FF006E, #00D9FF)*
