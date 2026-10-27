import { Project, ServiceItem, ExperienceItem, HighlightItem } from '../types';

export const BRAND_INFO = {
  name: 'Hafiz Riaz',
  title: 'Designer & Developer',
  location: 'International / Remote',
  email: 'contact@hafizriaz.com',
  shortBio: 'Crafting thoughtful digital experiences, functional design systems, and modern web applications with an emphasis on clarity, performance, and craftsmanship.',
  fullBio: [
    'I am Hafiz Riaz, a designer and developer dedicated to creating intuitive, visually refined, and high-performance digital products for the web.',
    'My work spans the entire spectrum from visual identity and user experience architecture to clean, accessible frontend engineering. I believe that modern web experiences should feel effortless—balancing aesthetic elegance with robust, sustainable code.',
    'Whether designing responsive interfaces for mobile screens or architecting complex web applications for laptop and desktop environments, my focus remains steady: deliver clarity over clutter, uphold rigorous accessibility standards, and craft software that users genuinely enjoy using.'
  ],
  socials: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/hafiz-riaz', icon: 'linkedin' },
    { label: 'GitHub', url: 'https://github.com/hafiz-riaz', icon: 'github' },
    { label: 'Twitter / X', url: 'https://x.com/hafizriaz', icon: 'twitter' },
    { label: 'Email', url: 'mailto:contact@hafizriaz.com', icon: 'mail' }
  ]
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    metric: 'Mobile-First',
    label: 'Responsive by Design',
    description: 'Engineered specifically for fluid, tactile experiences on mobile screens and spacious laptop views.'
  },
  {
    metric: 'WCAG 2.2 AA',
    label: 'Accessible Standards',
    description: 'High-contrast typography, semantic landmarks, and full keyboard navigational compliance.'
  },
  {
    metric: 'Sub-second',
    label: 'Performance Focus',
    description: 'Optimized asset delivery, zero-shift typography, and clean bundle architecture for fast loads.'
  },
  {
    metric: 'Global',
    label: 'International Reach',
    description: 'Collaborating with founders, teams, and clients across North America, Europe, and beyond.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'aura-design-system',
    slug: 'aura-design-system',
    title: 'Aura Editorial Design System',
    subtitle: 'Unified design tokens & component system for editorial publications',
    category: 'Web Design',
    year: '2026',
    summary: 'A minimal, high-performance design system with fluid typography and light/dark theme tokens designed for high-density reading experiences.',
    description: 'Aura was engineered to solve visual fragmentation across digital publications. It provides a cohesive token architecture that scales seamlessly from small smartphones (360px) to ultra-wide displays (1920px), featuring customized typography scales, accessible color ratios, and reusable interactive primitives.',
    role: 'Lead UI/UX Designer & Frontend Engineer',
    deliverables: ['Design Token Architecture', 'Component Library', 'Interactive Documentation', 'WCAG AA Audit'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Storybook'],
    featured: true,
    link: 'https://github.com/hafiz-riaz',
    metrics: [
      { label: 'Accessibility Score', value: '100%' },
      { label: 'Token Reductions', value: '45%' },
      { label: 'Screen Range', value: '360–1920px' }
    ],
    accentColor: '#0284c7'
  },
  {
    id: 'atlas-workspace',
    slug: 'atlas-workspace',
    title: 'Atlas Workspace',
    subtitle: 'Distraction-free digital product interface for modern distributed teams',
    category: 'Digital Product',
    year: '2025',
    summary: 'An intuitive, minimal productivity environment designed to eliminate cognitive overload for knowledge workers.',
    description: 'Atlas reimagines day-to-day team coordination by prioritizing focus and typography. Built with a responsive single-pane layout on mobile and an expandable multi-column canvas on laptops, it delivers instant responsiveness with zero UI latency.',
    role: 'Product Designer & Frontend Architect',
    deliverables: ['Product Architecture', 'Interactive Prototypes', 'Responsive Layouts', 'State Management'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    featured: true,
    link: 'https://github.com/hafiz-riaz',
    metrics: [
      { label: 'Interaction Latency', value: '<16ms' },
      { label: 'Component Reusability', value: '92%' }
    ],
    accentColor: '#4f46e5'
  },
  {
    id: 'lumina-architects',
    slug: 'lumina-architects',
    title: 'Lumina Spatial Studio',
    subtitle: 'Immersive portfolio and interactive project index for an architecture firm',
    category: 'Web Design',
    year: '2025',
    summary: 'An architectural portfolio showcasing spatial photography with subtle micro-interactions and tactile mobile gestures.',
    description: 'Designed with editorial restraint, Lumina balances full-bleed architectural photography with a structured grid system. The site offers custom mobile touch navigation, smooth gallery transitions, and an accessible project index.',
    role: 'Visual Designer & Creative Developer',
    deliverables: ['Creative Concept', 'Responsive Website', 'Image Optimization Pipeline', 'Custom Navigation'],
    techStack: ['React', 'Vite', 'Vanilla CSS Modules', 'Framer Motion'],
    featured: true,
    link: 'https://github.com/hafiz-riaz',
    metrics: [
      { label: 'Mobile PageSpeed', value: '99/100' },
      { label: 'LCP Duration', value: '0.8s' }
    ],
    accentColor: '#059669'
  },
  {
    id: 'intelligent-flow-engine',
    slug: 'intelligent-flow-engine',
    title: 'Intelligent Flow Engine',
    subtitle: 'Modular workflow visualizer & reactive process automation utility',
    category: 'Creative Tech',
    year: '2026',
    summary: 'A browser-based interactive node engine allowing creators to model logic branches, data transforms, and API pipelines visually.',
    description: 'Demonstrating advanced frontend state orchestration, this project lets users assemble interconnected logic blocks on an infinite SVG canvas. Fully adapted for both touch pinch-to-zoom on mobile devices and keyboard shortcuts on laptops.',
    role: 'Systems Developer & UI Engineer',
    deliverables: ['Canvas Engine', 'Node Interaction Model', 'Touch Gestures', 'JSON Pipeline Importer'],
    techStack: ['TypeScript', 'React', 'SVG / Canvas', 'Tailwind CSS'],
    featured: true,
    link: 'https://github.com/hafiz-riaz',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Bundle Footprint', value: '38 KB' }
    ],
    accentColor: '#d97706'
  },
  {
    id: 'verve-brand-systems',
    slug: 'verve-brand-systems',
    title: 'Verve Identity & Platform',
    subtitle: 'Contemporary visual identity & responsive e-commerce web platform',
    category: 'Brand Systems',
    year: '2024',
    summary: 'A minimalist brand identity system and responsive digital storefront for an independent sustainable lifestyle brand.',
    description: 'Verve combines Scandinavian editorial typography with clean, accessible shopping interactions. Every card, drawer, and checkout step was refined for quick thumb-reach on mobile phones and structured grid elegance on desktop monitors.',
    role: 'Brand Designer & Frontend Developer',
    deliverables: ['Brand Guidelines', 'Typography Hierarchy', 'Mobile Storefront', 'Micro-interactions'],
    techStack: ['Figma', 'React', 'Tailwind CSS', 'Shopify Storefront API'],
    featured: false,
    link: 'https://github.com/hafiz-riaz',
    accentColor: '#7c3aed'
  },
  {
    id: 'pulse-telemetry-dashboard',
    slug: 'pulse-telemetry-dashboard',
    title: 'Pulse Telemetry Interface',
    subtitle: 'Real-time metrics interface designed for clean visual hierarchy',
    category: 'Digital Product',
    year: '2025',
    summary: 'A high-contrast telemetry dashboard built to visualize server health, application throughput, and error rates with clarity.',
    description: 'Pulse delivers dense technical data without visual clutter. Designed with a strict typographic hierarchy and adaptive layout cards that shift from a 1-column mobile feed into a 3-column laptop mission control.',
    role: 'UI/UX Designer & React Engineer',
    deliverables: ['Dashboard Layouts', 'Chart Visualizations', 'Dark Theme Engineering', 'Responsive Tables'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart Primitives'],
    featured: false,
    link: 'https://github.com/hafiz-riaz',
    accentColor: '#2563eb'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-engineering',
    title: 'Web Design & Frontend Engineering',
    subtitle: 'High-performance, bespoke websites tailored for mobile and desktop screens',
    iconName: 'layout',
    description: 'Modern websites designed from first principles. I craft clean, responsive layouts that load instantly, communicate your value proposition clearly, and feel silky-smooth across every screen size.',
    outcomes: [
      'Bespoke visual identity tailored to your brand goals',
      'Sub-second load times and 95+ Core Web Vitals targets',
      'Full mobile optimization with thumb-friendly controls',
      'Accessible, semantic code built with React, Vite, and Tailwind'
    ],
    deliverables: ['Responsive Web Pages', 'Interactive Components', 'Production Build Pipeline', 'SEO & Open Graph Setup'],
    idealFor: 'Founders, agencies, creative professionals, and growing brands seeking a standout digital presence.'
  },
  {
    id: 'ui-ux-design-systems',
    title: 'UI/UX Design & Component Systems',
    subtitle: 'Scalable design systems that bridge visual aesthetics with clean code',
    iconName: 'figma',
    description: 'Creating cohesive design languages, typography scales, and reusable UI components. I ensure design continuity across mobile applications, web apps, and marketing touchpoints.',
    outcomes: [
      'Eliminate visual inconsistency across pages and products',
      'Speed up future feature development with modular tokens',
      'Ensure WCAG 2.2 AA accessibility and contrast compliance',
      'Seamless transition from Figma concepts to working code'
    ],
    deliverables: ['Design Token Architecture', 'Figma / Code Component Library', 'Usage Documentation', 'Interaction Guidelines'],
    idealFor: 'Product teams, startups, and companies standardizing their multi-screen interfaces.'
  },
  {
    id: 'creative-technology',
    title: 'Creative Technology & Prototyping',
    subtitle: 'Bringing complex ideas to life with interactive web prototypes',
    iconName: 'sparkles',
    description: 'Exploring bold concepts through functional code. From interactive product demos and dynamic dashboards to intelligent workflow prototypes and micro-interactions.',
    outcomes: [
      'Validate ambitious product ideas before heavy backend engineering',
      'Engage visitors with memorable, purposeful micro-animations',
      'Connect frontends to modern REST & GraphQL APIs reliably',
      'Fast iterative development with rapid feedback cycles'
    ],
    deliverables: ['High-Fidelity Interactive Demos', 'API Integrations', 'Animation Systems', 'Code Repository'],
    idealFor: 'Innovators needing tangible, clickable prototypes to pitch, test, or launch.'
  },
  {
    id: 'consulting-audit',
    title: 'Web Performance & Accessibility Audits',
    subtitle: 'Rigorous technical reviews to elevate speed, search ranking, and inclusivity',
    iconName: 'shieldCheck',
    description: 'Comprehensive reviews of existing websites to uncover performance bottlenecks, SEO gaps, mobile usability flaws, and accessibility barriers.',
    outcomes: [
      'Identify actionable steps to achieve 95+ Lighthouse scores',
      'Mitigate accessibility legal risks and broaden audience reach',
      'Streamline JavaScript bundles and optimize asset pipelines',
      'Clear, prioritized report with code-level fix recommendations'
    ],
    deliverables: ['Performance Audit Report', 'WCAG AA Compliance Checklist', 'Actionable Roadmap', 'Direct Code Fixes'],
    idealFor: 'Existing websites experiencing high bounce rates or compliance challenges.'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2024 — Present',
    role: 'Independent Designer & Frontend Engineer',
    organization: 'Hafiz Riaz Studio',
    location: 'Remote / Global',
    description: 'Designing and developing bespoke web platforms, design systems, and digital interfaces for international clients across North America, Europe, and Asia.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX Architecture', 'Design Systems', 'Web Performance']
  },
  {
    period: '2022 — 2024',
    role: 'Senior Digital Product Designer & Developer',
    organization: 'Digital Experience Group',
    location: 'Remote',
    description: 'Led responsive interface engineering and user experience audits for client websites, driving improvements in Core Web Vitals and mobile engagement.',
    skills: ['Frontend Architecture', 'Design Tokens', 'Figma', 'Accessibility (a11y)', 'Client Strategy']
  },
  {
    period: '2020 — 2022',
    role: 'Web Designer & Interface Specialist',
    organization: 'Creative Tech Collective',
    location: 'Hybrid',
    description: 'Crafted brand identities, editorial web layouts, and interactive component libraries for emerging businesses and cultural institutions.',
    skills: ['Semantic HTML/CSS', 'JavaScript', 'Responsive Grid', 'Typography', 'Visual Identity']
  }
];

export const SKILL_GROUPS = [
  {
    category: 'Design & UX',
    items: ['UI/UX Design', 'Design Systems & Tokens', 'Fluid Typography', 'Wireframing & Prototyping', 'Information Architecture', 'Figma']
  },
  {
    category: 'Frontend Engineering',
    items: ['React 18+', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 Semantic Landmarks', 'Framer Motion', 'Responsive Layouts']
  },
  {
    category: 'Quality & Optimization',
    items: ['WCAG 2.2 AA Accessibility', 'Core Web Vitals Optimization', 'Mobile-First Design', 'SEO Architecture', 'Vitest & Testing Library']
  }
];

export const FAQS = [
  {
    question: 'What kind of projects do you take on?',
    answer: 'I work on personal and company websites, portfolio showcases, design systems, interactive prototypes, and web application frontends. My ideal projects are those where quality of design, clean code, and user experience are valued.'
  },
  {
    question: 'How do you approach mobile versus laptop design?',
    answer: 'I design mobile-first: prioritizing clear vertical hierarchy, comfortable touch targets (at least 44px), readable fluid typography, and zero horizontal scroll. On laptops and desktops, the layout naturally expands into structured multi-column grids with generous whitespace and subtle hover interactions.'
  },
  {
    question: 'How do we collaborate if we are in different time zones?',
    answer: 'I work with clients internationally. Clear asynchronous communication, structured milestones, interactive preview deployments, and regular video check-ins ensure seamless progress regardless of time zones.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Focused portfolio and brand websites typically take 2 to 4 weeks from discovery to launch. Larger projects involving design systems or full web application interfaces range from 4 to 8 weeks depending on scope.'
  }
];
