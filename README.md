<<<<<<< HEAD
# Freelance-portfolio
My freelance writing portfolio
=======
# Emmanuel Gumo Katama - Freelance Writer Portfolio

A professional portfolio website showcasing freelance writing work examples in tech, lifestyle, and health sectors.

## Features

- **Work Examples**: Three professionally written articles in Tech, Lifestyle, and Health
- **Professional Design**: Clean, modern interface with interactive components
- **Contact Links**: Easy access to LinkedIn and email
- **Responsive Design**: Mobile-friendly layout
- **About Section**: Professional bio highlighting expertise and tools

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Shadcn/ui** - UI components

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn

### Installation

1. Clone or extract the project files
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── pages/       # Page components
│   ├── components/  # Reusable UI components
│   ├── contexts/    # React contexts
│   ├── lib/         # Utility functions
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles
└── index.html       # HTML template
```

## Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

### Deploy to GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Deploy:
```bash
npm run deploy
```

## Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx` to update:
- Name and title
- Email address
- LinkedIn profile URL
- Work examples and descriptions

### Modify Styling

Edit `client/src/index.css` to customize:
- Color scheme
- Typography
- Spacing and layout

### Add More Work Examples

Add new articles to the `articles` array in `client/src/pages/Home.tsx`

## License

MIT License - feel free to use this project for personal or commercial purposes.
>>>>>>> 2e87f2d (initial portfolio commit)
