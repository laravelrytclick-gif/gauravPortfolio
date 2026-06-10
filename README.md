# Gaurav Rathore - MERN Full Stack Developer Portfolio

A modern, visually stunning portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Three.js**. Features an immersive 3D jellyfish background, smooth animations, and a professional showcase of skills, projects, and experience.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a1628/00d4ff?text=Gaurav+Rathore+Portfolio)

## ✨ Features

### Visual & Interactive
- **3D Jellyfish Background** - Interactive Three.js scene with multiple jellyfish that respond to mouse movement
- **Smooth Animations** - Framer Motion-powered scroll animations and transitions
- **Glassmorphism Design** - Modern glass-card UI elements with gradient accents
- **Responsive Layout** - Fully responsive design optimized for all devices
- **TypeWriter Effect** - Animated typing effect for the hero section tagline
- **Scroll Reveal** - Elements animate into view as you scroll

### Sections
- **Hero** - Introduction with profile photo, animated title, and call-to-action buttons
- **About** - Professional summary with skill highlights
- **Skills** - Interactive skill bars and categorized technology tags
- **Projects** - Featured project cards with links to live demos and GitHub
- **Experience** - Timeline-style work history with detailed descriptions
- **Education** - Academic background information
- **Contact** - Contact information with email, phone, and social links

### Navigation
- **Sticky Navigation** - Glass-effect navbar that appears on scroll
- **Smooth Scrolling** - Click navigation links to smoothly scroll to sections
- **Mobile Menu** - Responsive hamburger menu for mobile devices

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.1.6 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **3D Graphics** | Three.js + React Three Fiber |
| **Icons** | Lucide React + Custom SVGs |
| **Build Tool** | Turbopack (Next.js default) |

## 📦 Dependencies

```json
{
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.5.0",
  "framer-motion": "^12.38.0",
  "lucide-react": "^1.8.0",
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "three": "^0.183.1"
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Gaurav-rathore77/gauravPortfolio.git
cd gauravPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile.png          # Profile photo
│   └── *.svg                # Static SVG assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind config
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main portfolio page (all sections)
│   ├── components/
│   │   ├── EnhancedJellyfish.tsx  # 3D jellyfish scene
│   │   ├── InteractiveJellyfish.tsx
│   │   ├── Jellyfish.tsx
│   │   ├── ParallaxContainer.tsx
│   │   ├── ParticleEffects.tsx
│   │   └── ThreeDText.tsx
│   └── styles/
│       └── globals.css      # Additional styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🎨 Customization

### Profile Information
Edit the content in `src/app/page.tsx`:
- Name and title in the Hero section
- About description
- Skills and proficiency percentages
- Project details and links
- Work experience timeline
- Contact information

### Color Scheme
The portfolio uses a cyan/blue gradient theme. Modify in `src/app/globals.css`:
```css
/* Primary gradient */
from-cyan-500 to-blue-500

/* Glass effect */
bg-blue-900/30 border-cyan-500/30
```

### 3D Scene
Customize the jellyfish scene in `src/components/EnhancedJellyfish.tsx`:
- Number of jellyfish
- Colors and materials
- Animation speeds
- Mouse interaction sensitivity

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default Next.js settings

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Other Platforms

This Next.js app can also be deployed to:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with `npm run build && npm start`

## 📊 Performance

The portfolio is optimized for performance with:
- **Static Generation** - Pre-rendered pages for fast load times
- **Image Optimization** - Next.js Image component for optimized images
- **Code Splitting** - Automatic splitting for faster initial loads
- **Lazy Loading** - 3D components load after initial page render

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements.

## 📧 Contact

- **Email:** gauravrathore9376@gmail.com
- **Phone:** +91 7827721365
- **GitHub:** [Gaurav-rathore77](https://github.com/Gaurav-rathore77)
- **Portfolio:** [Live Demo](https://gaurav-portfolio.vercel.app)

---

Built with ❤️ by Gaurav Rathore using Next.js, Tailwind CSS & Three.js