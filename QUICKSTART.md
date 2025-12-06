# Quick Start Guide

Welcome! Follow these steps to get your project running locally and deploy to Vercel.

## 📋 Prerequisites

Make sure you have installed:
- Node.js 18 or higher ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))

## 🚀 Local Development

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 18
- Tailwind CSS v4
- TypeScript
- Lucide React (icons)

### Step 2: Start Development Server

```bash
npm run dev
```

Your site will be available at: http://localhost:3000

### Step 3: Make It Your Own

Edit these files to customize:
- `components/Header.tsx` - Update GitHub link
- `components/Footer.tsx` - Update social media links
- `components/CTA.tsx` - Update repository URL
- `app/layout.tsx` - Update metadata

## 🌐 Deploy to Vercel (Easiest Method)

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Name your repository
   - Don't initialize with README

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy" (Vercel auto-detects Next.js settings)

### Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy
vercel
```

## 🎨 Customization Tips

### Change Colors

Edit `app/globals.css`:
```css
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

### Add Your Logo

Replace the emoji in `components/Header.tsx`:
```tsx
<span className="text-2xl font-bold">Your Logo</span>
```

### Update Content

Each component in the `components/` folder represents a section of the page:
- `Hero.tsx` - Main headline and hero section
- `Features.tsx` - Feature cards
- `HowItWorks.tsx` - Process timeline
- `TechStack.tsx` - Technologies used
- `Statistics.tsx` - Key metrics
- `CTA.tsx` - Call-to-action
- `Footer.tsx` - Footer links

## 📱 Testing Responsive Design

Test on different screen sizes:
- Mobile: http://localhost:3000 (resize browser)
- Use Chrome DevTools (F12) → Device Toolbar
- Test on actual devices

## 🔧 Build for Production

```bash
npm run build
npm start
```

This creates an optimized production build.

## ✅ Checklist Before Deploying

- [ ] Updated all GitHub links
- [ ] Updated social media links
- [ ] Customized content for your project
- [ ] Tested on mobile/tablet/desktop
- [ ] Checked all links work
- [ ] Updated README with your project info
- [ ] Committed all changes to Git

## 🆘 Common Issues

**Issue: `npm install` fails**
- Solution: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue: Port 3000 already in use**
- Solution: Run `npm run dev -- -p 3001` to use port 3001

**Issue: Tailwind styles not working**
- Solution: Make sure `globals.css` is imported in `layout.tsx`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 🎉 You're All Set!

Your beautiful car recommendation showcase website is ready to go live!

Questions? Check the documentation or open an issue on GitHub.
