# Deployment Guide - Emmanuel Gumo Katama Portfolio

This guide will help you deploy your portfolio to the web using Netlify (recommended) or Vercel.

## Why Netlify?

**Netlify is recommended because:**
- Free tier with generous limits
- Automatic deployments from GitHub
- Easy custom domain setup
- Excellent documentation and support
- Fast global CDN
- One-click rollbacks

## Step-by-Step: Deploy to Netlify

### Step 1: Push Code to GitHub

1. Create a new repository on GitHub (https://github.com/new)
   - Repository name: `portfolio` (or your preferred name)
   - Make it **Private** if you want
   - Click "Create repository"

2. Push your code:
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Sign up" and choose "GitHub" (or create an account)
3. Authorize Netlify to access your GitHub
4. Click "New site from Git"
5. Select your GitHub account
6. Find and select your `portfolio` repository
7. Click "Deploy site"

**Netlify will auto-detect these settings:**
- Build command: `npm run build`
- Publish directory: `dist`

That's it! Your site is now live at a Netlify URL like `your-site-name.netlify.app`

### Step 3: Use a Custom Domain (Optional)

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain"
3. Enter your domain (e.g., `emmanuelgumo.com`)
4. Follow the instructions to update your domain's DNS settings
5. Your site will be live at your custom domain in 24-48 hours

## Alternative: Deploy to Vercel

### Step 1: Push Code to GitHub (Same as above)

### Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Sign up" and choose "GitHub"
3. Authorize Vercel to access your GitHub
4. Click "New Project"
5. Find and select your `portfolio` repository
6. Click "Import"
7. Vercel will auto-detect settings and deploy automatically

Your site will be live at `your-project.vercel.app`

## After Deployment

### Update Your Portfolio Link

Once deployed, use your live URL when applying to ProWriterSites:
- **Netlify**: `https://your-site-name.netlify.app`
- **Vercel**: `https://your-project.vercel.app`
- **Custom domain**: `https://yourdomain.com`

### Make Changes

Any changes you push to GitHub will automatically deploy:

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push
```

Your site will update automatically within seconds!

### Monitor Deployments

- **Netlify**: Dashboard → "Deploys" tab shows all deployments
- **Vercel**: Dashboard → "Deployments" tab shows all deployments

## Troubleshooting

### Build fails with "npm not found"

Make sure you have `package.json` in the root directory (you should)

### Site shows blank page

1. Check the deployment logs for errors
2. Make sure `dist` folder is the publish directory
3. Try rebuilding: Delete the `node_modules` folder and `package-lock.json`, then push again

### Custom domain not working

DNS changes can take 24-48 hours to propagate. Be patient!

## Environment Variables (If Needed)

If you add environment variables later:

**Netlify:**
1. Go to "Site settings" → "Build & deploy" → "Environment"
2. Add your variables

**Vercel:**
1. Go to "Settings" → "Environment Variables"
2. Add your variables

## Need Help?

- [Netlify Documentation](https://docs.netlify.com)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Help](https://docs.github.com)
