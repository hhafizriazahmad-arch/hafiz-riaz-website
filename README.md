# Hafiz Riaz — Personal Brand & Professional Portfolio

A premium, production-grade personal brand and professional portfolio website engineered for **Hafiz Riaz**, designed with a mobile-first philosophy and responsive ergonomics across mobile, tablet, laptop, and ultra-wide screens.

---

## 1. Project Overview

- **Brand Name**: Hafiz Riaz
- **Website Type**: Personal Brand & Professional Portfolio
- **Target Audience**: International visitors, prospective clients, founders, and recruiters in the USA, UK, Canada, and global markets.
- **Brand Personality**: Confident, minimal, editorial, trustworthy, and modern.
- **Visual Direction**: Editorial typography with generous whitespace, subtle cards, and responsive fluid layout.
- **Key Disciplines**: Web Design & Frontend Engineering, UI/UX Design & Component Systems, Creative Technology & Prototyping, Web Performance & Accessibility Audits.

---

## 2. Technology Stack

- **Core**: React 18.3 (Strict Mode)
- **Language**: TypeScript 5.6
- **Build Tool**: Vite 6.0
- **Routing**: React Router 6.28
- **Styling**: Tailwind CSS 3.4 with custom design tokens, fluid typography via `clamp()`, and CSS variables
- **Icons**: Lucide React
- **Motion**: Framer Motion
- **Forms & Validation**: React Hook Form with Zod schemas
- **SEO & Metadata**: React Helmet Async, OpenGraph, XML sitemap, and robots.txt
- **Testing**: Vitest 2.1 and React Testing Library 16.1

---

## 3. Pages & Sitemap

| Route | Page | Purpose |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero, trust highlights, selected work showcase, practitioner bio preview, services overview, and direct CTA. |
| `/about` | **About** | Personal narrative, core principles, career milestones, skills matrix, and interactive FAQ accordion. |
| `/portfolio` | **Portfolio** | Filterable project showcase by category (*Web Design*, *Digital Product*, *Creative Tech*, *Brand Systems*), live keyword search, and accessible project detail modals. |
| `/services` | **Services** | 4 specialized practice areas with tangible deliverables, expected outcomes, and 4-step collaboration methodology. |
| `/contact` | **Contact** | Accessible inquiry form validated with Zod schemas, direct email, response timeline, and verified social links. |
| `/privacy` | **Privacy Policy** | Transparent data practices with zero third-party tracking or advertising cookies. |
| `/terms` | **Terms of Service** | Intellectual property terms, open-source references, and legal disclaimers. |
| `*` | **404 Not Found** | Custom branded error view with quick links back to homepage and portfolio. |

---

## 4. Responsive Viewports & Ergonomics

The application is engineered mobile-first and tested across:
- **Mobile (360px – 390px)**: Compact accessible mobile drawer, readable fluid hero typography, thumb-friendly tap targets (`>= 44px`), single-column content stacking, and zero horizontal scroll.
- **Tablet (768px)**: Adaptive 2-column project and service cards.
- **Laptop (1024px – 1280px)**: Refined horizontal navigation header, two-column hero composition, and comfortable reading measure.
- **Desktop (1440px – 1920px)**: Max content container (`76rem / 1216px`), 3-column project grid, and balanced whitespace.

---

## 5. Accessibility (WCAG 2.2 AA)

- Semantic HTML landmarks (`<header>`, `<main id="main-content">`, `<nav>`, `<article>`, `<footer>`).
- Visible-on-focus `<SkipLink />` bypassing navigation directly to `#main-content`.
- High text contrast exceeding the 4.5:1 ratio for normal text and 3:1 for large text across both light and dark themes.
- Touch targets strictly designed with minimum 44×44px hitboxes.
- Visible focus outlines (`focus-visible:ring-2 focus-visible:ring-accent-500`).
- Modal dialogs with focus lock, backdrop dismissal, and `Escape` key support.
- Media query support for `prefers-reduced-motion: reduce`.

---

## 6. Local Development & Testing

### Prerequisites
- Node.js `v20.x` or higher
- npm `v10.x` or higher

### Installation
```bash
# Clone or navigate to the project directory
cd "c:\antigravity\website for mobile"

# Install dependencies
npm install
```

### Local Dev Server
```bash
npm run dev
```
Starts Vite local server at `http://localhost:5173/`.

### Run Automated Tests
```bash
npm test
```
Executes Vitest test suites (Button, ContactForm validation, Navbar navigation).

### Build for Production
```bash
npm run build
```
Runs TypeScript type check (`tsc -b`) and generates optimized production bundle in `/dist`.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally at `http://localhost:4173/`.

---

## 7. Deployment Guide (Vercel)

The repository includes a ready-to-deploy `vercel.json` with SPA route rewrites, security headers, and asset caching rules:

1. Connect the GitHub repository to [Vercel](https://vercel.com).
2. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Optional Environment Variables in Vercel project settings:
   - `VITE_SITE_URL`: `https://hafizriaz.com`
   - `VITE_CONTACT_ENDPOINT`: (Optional API endpoint for external lead delivery, e.g. Formspree/Resend)
4. Click **Deploy**.

---

## 8. Verification & Quality Summary

- **TypeScript Verification**: Passed (`0 errors`, strict mode enabled).
- **Automated Tests**: 9/9 tests passed (100% success rate across 3 suites).
- **Production Bundle**: Successfully built (`dist/index.html`, `dist/assets/*.css`, `dist/assets/*.js`).
- **Security Headers**: Configured via `vercel.json` (`nosniff`, `DENY`, `strict-origin-when-cross-origin`).
