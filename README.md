# 🚀 Developer Portfolio Website

A modern, responsive developer portfolio website built with **React**, **TypeScript**, and **TailwindCSS**. Features a beautiful purple-black-white color scheme and smooth animations.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80)

## ✨ Features

- 🎨 **Modern Design**: Beautiful purple-black-white theme with gradients and animations
- 📱 **Fully Responsive**: Works perfectly on all devices and screen sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🔧 **TypeScript**: Fully typed for better development experience
- 🎯 **Smooth Scrolling**: Elegant navigation between sections
- 📧 **Contact Form**: Interactive contact form with validation
- 🌙 **Dark Theme**: Professional dark color scheme

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/
│   └── projects.ts     # Project data and skills
├── assets/             # Images and static files
├── ui/                 # Reusable UI components
└── App.tsx            # Main application
```

## 🚀 Getting Started

### 1. Fork & Clone

1. **Fork this repository** to your GitHub account
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/developer-portfolio.git
   cd developer-portfolio
   ```

### 2. Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎨 Customization Guide

### Update Your Information

#### 1. Personal Details
Edit the following components with your information:

**Hero Section** (`src/components/Hero.tsx`):
```tsx
// Update name, title, and description
<h1>Your Name Here</h1>
<p>Your Title/Role</p>
```

**About Section** (`src/components/About.tsx`):
```tsx
// Replace with your story
<p>Your personal story and experience...</p>
```

#### 2. Projects
Update your projects in `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'TypeScript', 'etc'],
    image: 'project-image-url',
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://your-project.com',
    featured: true
  },
  // Add more projects...
];
```

#### 3. Skills
Update your skills in the same file:

```typescript
export const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  // Add your skills...
];
```

#### 4. Contact Information
Update contact details in:
- `src/components/Header.tsx` (social links)
- `src/components/Hero.tsx` (social links)
- `src/components/Contact.tsx` (contact info)
- `src/components/Footer.tsx` (contact info)

Replace all instances of:
- `your.email@example.com` → Your email
- `https://github.com/yourusername` → Your GitHub
- `https://linkedin.com/in/yourusername` → Your LinkedIn

### Customize Design

#### Colors
The color system is defined in `src/index.css`. Update the CSS custom properties:

```css
:root {
  --primary: 262 83% 58%;     /* Purple */
  --background: 0 0% 100%;    /* White */
  --foreground: 220 13% 18%;  /* Dark text */
  /* Modify other colors as needed */
}
```

#### Fonts
Fonts are configured in `tailwind.config.ts` and loaded in `index.html`:

```typescript
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'mono': ['JetBrains Mono', 'monospace']
}
```

## 🚀 Deploy to GitHub Pages

### Option 1: Automatic Deployment

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/REPOSITORY_NAME",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update base path** in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/REPOSITORY_NAME/',
     // ... other config
   });
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

Enable GitHub Pages in repository settings → Pages → Source: GitHub Actions.

## 🤖 AI Customization Tips

Use these AI prompts to quickly customize your content:

### Content Generation
```
"Write a professional 3-line 'About Me' for a front-end developer who loves minimal design, React, and has 5 years of experience."

"Generate 5 project descriptions for a full-stack developer's portfolio. Include: e-commerce site, task manager, weather app, blog platform, and chat application."

"Create a skills list for a modern web developer including frontend, backend, and tools."
```

### Design Adjustments
```
"Modify the CSS custom properties to use a blue-gray color scheme instead of purple."

"Add a new project card hover effect that includes a subtle scale animation."
```

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/developer-portfolio/issues).

## ⭐ Show Your Support

If this helped you create your portfolio, please give it a ⭐!

---

**Ready to showcase your work?** Fork this repo and make it your own! 🚀
