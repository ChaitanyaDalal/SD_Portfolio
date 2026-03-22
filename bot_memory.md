# 🧠 Bot Memory: Portfolio Project DNA

This file acts as the persistent memory for this high-end portfolio project. It contains technical summaries, architectural decisions, and current build status.

## 🚀 Build Summary (Status: 2026-03-23)
The portfolio has been transformed into a **Multi-Page Premium Web App** with a focus on high-end 3D visual fidelity and absolute reliability.

### 1. Navigation & Routing
- **Multi-Page Core**: Routes are handled via `src/app/` (`/`, `/about`, `/projects`, `/contact`).
- **Navbar**: Glassmorphic floating pill with an active link indicator. Includes:
    - Persistent **Audio Visualizer & Controls** (Links to `public/audio/music.mp3`).
    - **CTA Button**: "Book a Call".
- **Global Context**: Music and state are preserved across navigation.

### 2. Key Components
- **Intro Sequence**: High-end Macbook animation using GSAP and ThreeJS shaders.
- **Hero Section**: Responsive premium landing.
- **About Section**: Duo-Bento grid.
    - **Photo Card**: Leverages a fail-safe `<img>` tag with uppercase pathing (`/images/DP.jpg`) to bypass Next.js image optimization issues on Windows.
    - **3D Core**: Audio-reactive rotating gem powered by React Three Fiber (R3F).
- **Skills Section**: Technical Bento grid.
    - **Globe**: High-tech radar-style 3D globe visualization.
    - **Collaboration Rings**: Animated Rings with profile photo.
    - **Tech Stack**: Grid of production tools with a custom "Fake Window" browser graphic.
- **Projects & Testimonials**: Organized dedicated page for social proof and work gallery.

### 3. Styling & Aesthetic
- **Global Theme**: Dark OS-inspired look (`#050505`).
- **Accent Color**: Neon Blue (`#00f7ff`).
- **Dotted Background**: Global fixed radial-gradient grid overlay.
- **Typography**: Uses Geist and Playfair Display (Serif Italic) for premium contrast.

## 🛠️ Tech Stack
- **Core**: Next.js (App Router), React, TypeScript.
- **Styling**: Vanilla CSS Modules (Primary), Globals for typography/tokens.
- **Animation**: Framer Motion (Page Transitions/Enter animations), GSAP (Intro).
- **3D Graphics**: React Three Fiber, Three.js, Drei.
- **Icons**: Lucide React.

## ⚠️ Critical Development Notes (Read Before Editing)
1. **The Photo Problem**: ALWAYS use `<img src="/images/DP.jpg" ... />` for the profile photo. The uppercase "DP" is mandatory on the current local filesystem. Do not use `<Image />` from next/image for this specific file as it causes 404/Sad Face artifacts in the current environment.
2. **Layout Fixes**: If the 3D globe or text overlaps in the Skills section, adjust the `bottom` and `z-index` in `Skills.module.css`.
3. **Responsiveness**: Always audit the Bento grids for mobile. Use `grid-template-columns: 1fr` and `grid-auto-rows: auto` on small screens to prevent content squashing.
4. **Config**: `trailingSlash` is disabled in `next.config.ts` to prevent public assets from 404-ing.
