# 🚗 Local LLM Car Recommendation System - Website

A modern, beautiful single-page website showcasing the Local LLM Car Recommendation System project. Built with Next.js 15, React 18, and Tailwind CSS v4.

## 🌟 Features

- **Modern Design**: Beautiful dark theme with cyan/blue accents
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Fade-in, slide-up effects, and smooth scrolling
- **Performance Optimized**: Built for Core Web Vitals
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Tailwind v4**: Latest Tailwind CSS with modern features

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd car-recommender-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 🌐 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/car-recommender-nextjs)

### Steps:
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

## 📁 Project Structure

```
car-recommender-nextjs/
├── app/
│   ├── globals.css         # Global styles with Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── HowItWorks.tsx      # Process flow section
│   ├── TechStack.tsx       # Technology stack
│   ├── Statistics.tsx      # Key metrics
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── package.json
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Customization

### Colors

Edit the color scheme in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

### Content

Update content in individual component files in the `components/` directory.

### Links

Update GitHub and social links in:
- `components/Header.tsx`
- `components/CTA.tsx`
- `components/Footer.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built with ❤️ by AI-Powered Development Team

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

**Note**: This is a showcase website for the Local LLM Car Recommendation System. For the actual car recommendation application, please visit the main project repository.
