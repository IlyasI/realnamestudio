# Deployment Guide for realnamestudio.com & realname.studio

## GitHub Setup (Complete This First)

Your private repo has been created at: **https://github.com/IlyasI/realnamestudio**

To push your code, run:
```bash
cd /home/ilyas/realnamestudio
git push -u origin main
```

If you get an SSH error, either:
1. Set up SSH keys with GitHub, or
2. Switch to HTTPS:
```bash
git remote set-url origin https://github.com/IlyasI/realnamestudio.git
git push -u origin main
```

---

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Free tier is perfect for this
- Automatic deployments from GitHub
- Built-in SSL certificates
- Custom domain setup is super simple
- Zero configuration needed for Node.js

**Steps:**

1. **Go to [vercel.com](https://vercel.com) and sign in with GitHub**

2. **Import your repository:**
   - Click "Add New" → "Project"
   - Select your `realnamestudio` repo
   - Click "Import"

3. **Configure (Vercel auto-detects everything, but verify):**
   - Framework Preset: Other
   - Build Command: (leave empty)
   - Output Directory: public
   - Install Command: `npm install`
   - Development Command: `npm start`

4. **Deploy:**
   - Click "Deploy"
   - Wait 30 seconds for it to build
   - You'll get a URL like `realnamestudio.vercel.app`

5. **Connect Your Domains:**

   **For realnamestudio.com:**
   - In Vercel project settings, go to "Domains"
   - Add `realnamestudio.com`
   - Vercel will give you DNS records to add

   **Go to Namecheap:**
   - Log into Namecheap
   - Go to Domain List → Manage `realnamestudio.com`
   - Advanced DNS tab
   - Add these records (Vercel will tell you the exact values):
     ```
     Type: A Record
     Host: @
     Value: 76.76.21.21 (Vercel's IP)

     Type: CNAME Record
     Host: www
     Value: cname.vercel-dns.com
     ```

   **For realname.studio:**
   - Same process in Vercel
   - Add `realname.studio`
   - Add same DNS records in Namecheap for the .studio domain

6. **SSL:**
   - Vercel automatically provisions SSL certificates
   - Wait 5-10 minutes after adding domains
   - Your sites will be live with HTTPS!

---

### Option 2: Railway

**Why Railway?**
- Great for Node.js apps
- Free tier available
- Easy GitHub integration

**Steps:**

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Select `realnamestudio`
5. Railway auto-detects Node.js and deploys
6. In Settings → Domains:
   - Add your custom domains
   - Follow DNS instructions (similar to Vercel)

---

### Option 3: Render

**Steps:**

1. Go to [render.com](https://render.com)
2. "New Web Service"
3. Connect GitHub → select `realnamestudio`
4. Settings:
   - Name: realnamestudio
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Create Web Service
6. Add custom domains in settings

---

## Namecheap DNS Configuration

**No matter which hosting you choose, the DNS setup in Namecheap is similar:**

1. **Log into Namecheap**
2. **Go to Domain List**
3. **Click "Manage" next to your domain**
4. **Advanced DNS tab**
5. **Add records based on your hosting provider's instructions**

**Common setup:**
- Delete any existing A/CNAME records for @ and www
- Add new records from your hosting provider
- TTL: Automatic (or 300 seconds)
- Wait 10-60 minutes for DNS propagation

---

## Testing Your Deployment

1. **Check DNS propagation:**
   - Visit: https://dnschecker.org
   - Enter your domain
   - Verify A/CNAME records are showing globally

2. **Visit your sites:**
   - https://realnamestudio.com
   - https://realname.studio
   - Both should load your site with SSL

3. **Test the contact links:**
   - Make sure mailto links work
   - Verify all navigation

---

## Updating Your Site

After initial deployment:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update site"
   git push
   ```
3. Your hosting platform auto-deploys the changes
4. Live in 30-60 seconds!

---

## Environment Variables (if needed later)

If you add features that need API keys:

**Vercel:** Settings → Environment Variables
**Railway:** Variables tab
**Render:** Environment section

---

## Troubleshooting

**Site not loading after DNS change?**
- Wait up to 1 hour for DNS propagation
- Clear browser cache (Cmd/Ctrl + Shift + R)
- Check DNS with: `dig realnamestudio.com`

**SSL certificate errors?**
- Wait 10-15 minutes after domain connection
- Vercel/Railway/Render auto-provision SSL
- If stuck, try removing and re-adding domain

**Build failing?**
- Check that package.json has all dependencies
- Verify Node.js version compatibility
- Check deployment logs in your hosting dashboard

---

## My Recommendation

**Use Vercel.** It's the fastest and easiest for this project:
- ✅ Free tier is perfect
- ✅ Auto-deploys from GitHub
- ✅ SSL is automatic
- ✅ Custom domains are super simple
- ✅ Built for Node.js/Express apps
- ✅ Great performance

Total setup time: ~10 minutes
