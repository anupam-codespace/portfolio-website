# Anupam Saha — Modern Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF69B4?logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=three.js)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A high-performance, modern developer portfolio built with **Next.js 14**, **React 18**, and **TypeScript**. Designed and tailored for **Anupam Saha** — Software Engineer specializing in **Mobile Application Development**, **App UI Design**, and **Full-Stack Engineering**.

🚀 **Live Deployment:** [https://anupam-portfolio-seven.vercel.app](https://anupam-portfolio-seven.vercel.app)

🌐 **Connect & Profiles:** [Linktree](https://linktr.ee/helloanupam) • [GitHub](https://github.com/anupam-codespace) • [LinkedIn](https://www.linkedin.com/in/anupam-saha-3a997321b/) • [X (Twitter)](https://x.com/AnupamSaha070) • [Credly](https://credly.com/users/anupam-saha.work) • [Email](mailto:anupamtospace002@gmail.com)

---

## 🌟 Key Highlights & Features

- **Dynamic Hero Section:** Ambient spotlights, radial gradient grid overlay, animated word-by-word typography with Aceternity UI effects, and intuitive call-to-action navigation.
- **Interactive Bento Grid:** Modular grid featuring global availability, mobile & full-stack tech stack pills, and an instant **one-click copy email** feature with celebratory Lottie confetti.
- **3D Interactive Globe:** Embedded WebGL globe powered by Three.js and React Three Fiber visualizing global communication and client collaboration.
- **3D Tilt Project Cards:** Interactive Pin cards with perspective tilt effects, cover previews, tech-stack icons, and direct project exploration.
- **Infinite Testimonials Carousel:** Smooth infinite-scrolling marquee cards highlighting client feedback and industry collaborations.
- **Work Experience with Moving Borders:** Dynamic gradient border animations highlighting career journey, mobile app engineering, and full-stack development roles.
- **Interactive Engineering Approach:** Multi-phase approach cards with hover-activated WebGL canvas dot-matrix shader reveal effects.
- **Modern Dark UI & Theme:** Curated deep-space dark palette with responsive layouts optimized across mobile, tablet, and desktop devices.
- **SEO & Social Metadata:** Fully configured Open Graph, Twitter cards, and structured metadata for search engine indexing.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 14 (App Router), React 18, TypeScript 5.3 |
| **Styling & Design** | Tailwind CSS 3.3, Tailwind Merge, Class Variance Authority (CVA), CSS Variables |
| **Animation & Motion** | Framer Motion 11 |
| **3D & WebGL Graphics** | Three.js, Three-Globe, @react-three/fiber, @react-three/drei |
| **Special Effects** | Custom GLSL Canvas Shaders, React Lottie animations, SVG Spotlights |
| **Icons & UI** | React Icons, Tabler Icons, Lucide React |
| **Theme System** | Next-Themes (system-aware dark mode) |

---

## 📁 Project Architecture

```bash
portfolio-website/
├── app/
│   ├── layout.tsx            # Root layout with SEO metadata & theme provider
│   ├── page.tsx              # Main single-page portfolio layout
│   ├── globals.css           # Global typography, color tokens, and utilities
│   ├── provider.tsx          # Next-themes client wrapper
│   └── global-error.jsx      # Global runtime error boundary
├── components/
│   ├── Hero.tsx              # Hero spotlight & animated introduction
│   ├── Grid.tsx              # Bento grid section container
│   ├── RecentProjects.tsx    # 3D Pin project showcase cards
│   ├── Clients.tsx           # Testimonials infinite marquee + company logos
│   ├── Experience.tsx        # Career milestone cards with moving borders
│   ├── Approach.tsx          # Canvas reveal shader cards
│   ├── Footer.tsx            # Contact CTA, social links, and copyright
│   ├── MagicButton.tsx       # Reusable button with conic-gradient border
│   └── ui/                   # Reusable Aceternity & custom UI components
│       ├── BentoGrid.tsx     # Bento layout, tech stacks & email copy handler
│       ├── CanvasRevealEffect.tsx # GLSL dot-matrix canvas shader
│       ├── FloatingNavbar.tsx# Scroll-aware floating navigation bar
│       ├── Globe.tsx         # Three.js 3D globe visualization
│       ├── InfiniteCards.tsx # Infinite auto-scrolling testimonial cards
│       ├── MovingBorders.tsx # Moving border gradient animation
│       ├── Pin.tsx           # 3D perspective tilt container
│       ├── Spotlight.tsx     # Radial SVG spotlight effects
│       └── TextGenerateEffect.tsx # Staggered text reveal animation
├── data/
│   ├── index.ts              # Projects, experience, testimonials & social links
│   ├── confetti.json         # Lottie confetti animation data
│   └── globe.json            # 3D globe coordinates & arcs data
├── public/                   # Static assets, SVG icons, and thumbnails
├── package.json              # Project scripts & dependencies
├── tailwind.config.ts        # Custom Tailwind configuration & animation utilities
└── tsconfig.json             # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or later recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anupam-codespace/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live portfolio.

### Production Build

```bash
# Build the production bundle
npm run build

# Start the production server
npm run start
```

---

## 📬 Connect & Contact

- **Name:** Anupam Saha
- **Role:** Software Engineer (Mobile Application & App UI Development)
- **Email:** [anupamtospace002@gmail.com](mailto:anupamtospace002@gmail.com)
- **Linktree:** [linktr.ee/helloanupam](https://linktr.ee/helloanupam)
- **GitHub:** [github.com/anupam-codespace](https://github.com/anupam-codespace)
- **LinkedIn:** [linkedin.com/in/anupam-saha-3a997321b](https://www.linkedin.com/in/anupam-saha-3a997321b/)
- **X (Twitter):** [x.com/AnupamSaha070](https://x.com/AnupamSaha070)
- **Credly:** [credly.com/users/anupam-saha.work](https://credly.com/users/anupam-saha.work)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

Copyright © 2026 **Anupam Saha**.
