# Vercel Deployment Configuration

This file is automatically detected by Vercel. The project will be deployed with optimal settings.

## Build Settings (Auto-detected)

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Environment Variables

No environment variables are required for this project.

## Domain Configuration

After deployment:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain (optional)

## Performance

This project is optimized for:
- Edge Functions
- Automatic Static Optimization
- Image Optimization
- Code Splitting

## Deployment Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to https://vercel.com/new
   - Select your repository
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to `main` triggers a production deployment
   - Pull requests create preview deployments

## Troubleshooting

If you encounter issues:
- Ensure Node.js version is 18+
- Check that all dependencies are listed in package.json
- Review build logs in Vercel dashboard
