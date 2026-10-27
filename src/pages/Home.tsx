import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProjectCard } from '../components/portfolio/ProjectCard';
import { BRAND_INFO, PROJECTS, HIGHLIGHTS, SERVICES } from '../data/content';
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layout,
  Code2,
  CheckCircle2,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-5 h-5 text-accent-600 dark:text-accent-400" />;
      case 'figma':
        return <Code2 className="w-5 h-5 text-accent-600 dark:text-accent-400" />;
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-accent-600 dark:text-accent-400" />;
      case 'shieldCheck':
        return <ShieldCheck className="w-5 h-5 text-accent-600 dark:text-accent-400" />;
      default:
        return <Layout className="w-5 h-5 text-accent-600 dark:text-accent-400" />;
    }
  };

  return (
    <div className="space-y-20 sm:space-y-28 md:space-y-36 pb-12">
      {/* Hero Section */}
      <section className="pt-8 sm:pt-14 md:pt-20 lg:pt-24" aria-labelledby="hero-heading">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface-card text-surface-muted text-xs font-medium w-fit shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Select Design & Engineering Work</span>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="fluid-hero font-bold tracking-tight text-surface-text"
              >
                Designing clear, memorable{' '}
                <span className="font-serif-editorial italic font-normal text-surface-text">
                  digital experiences
                </span>{' '}
                for mobile and desktop.
              </h1>

              {/* Value Proposition Description */}
              <p className="fluid-body text-surface-muted max-w-xl">
                I am <strong className="text-surface-text font-semibold">Hafiz Riaz</strong>. I craft thoughtful personal brands, high-performance websites, and accessible digital products with a focus on simplicity, speed, and genuine craft.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Button
                  href="/portfolio"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Selected Work
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  leftIcon={<Mail className="w-4 h-4" />}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Subtle Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-surface-subtle border-t border-surface-border/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Mobile-first responsive layouts
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> WCAG 2.2 AA compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> International collaboration
                </span>
              </div>
            </div>

            {/* Right Visual Composition Column (Laptop / Desktop visual card) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-surface-card border border-surface-border rounded-3xl p-7 sm:p-9 shadow-elevated relative overflow-hidden">
                {/* Decorative subtle backdrop highlight */}
                <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent-100/40 dark:bg-accent-900/20 blur-3xl pointer-events-none" />

                <div className="relative space-y-6">
                  {/* Monogram / Portrait Visual Card */}
                  <div className="flex items-center justify-between pb-6 border-b border-surface-border">
                    <div className="w-14 h-14 rounded-2xl bg-surface-text text-surface-canvas flex items-center justify-center font-bold text-xl tracking-tight shadow-sm">
                      HR
                    </div>
                    <div className="text-right">
                      <span className="block text-xs uppercase tracking-wider font-semibold text-surface-subtle">
                        Identity
                      </span>
                      <span className="text-sm font-semibold text-surface-text">
                        Hafiz Riaz
                      </span>
                    </div>
                  </div>

                  {/* Core Disciplines */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-surface-subtle">
                      Core Focus
                    </span>
                    <div className="space-y-2">
                      <div className="p-3 rounded-xl bg-surface-elevated/70 border border-surface-border/70 flex items-center justify-between">
                        <span className="text-sm font-medium text-surface-text">
                          Responsive Web Design
                        </span>
                        <span className="text-xs font-mono text-surface-subtle">360–1920px</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-elevated/70 border border-surface-border/70 flex items-center justify-between">
                        <span className="text-sm font-medium text-surface-text">
                          UI/UX & Design Systems
                        </span>
                        <span className="text-xs font-mono text-surface-subtle">Tokens & Figma</span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-elevated/70 border border-surface-border/70 flex items-center justify-between">
                        <span className="text-sm font-medium text-surface-text">
                          Frontend Architecture
                        </span>
                        <span className="text-xs font-mono text-surface-subtle">React & TS</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Contact prompt */}
                  <div className="pt-2 flex items-center justify-between text-xs text-surface-muted">
                    <span>Global Remote Practice</span>
                    <Link
                      to="/about"
                      className="text-accent-600 dark:text-accent-400 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights / Principles Grid */}
      <section aria-labelledby="highlights-heading">
        <Container size="default">
          <div className="border-t border-surface-border pt-12 sm:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex flex-col space-y-2">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
                    {item.metric}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-surface-text">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Selected Work Showcase */}
      <section aria-labelledby="selected-work-heading">
        <Container size="default">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2 block">
                Portfolio Preview
              </span>
              <h2
                id="selected-work-heading"
                className="fluid-h2 font-bold text-surface-text tracking-tight"
              >
                Selected Work & Projects
              </h2>
            </div>
            <Button
              href="/portfolio"
              variant="ghost"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View All Projects ({PROJECTS.length})
            </Button>
          </div>

          {/* Responsive Multi-column Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial About Preview */}
      <section aria-labelledby="about-preview-heading">
        <Container size="default">
          <div className="bg-surface-elevated/50 border border-surface-border rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
                About the Practitioner
              </span>

              <h2
                id="about-preview-heading"
                className="fluid-h2 font-bold text-surface-text tracking-tight"
              >
                "Great digital experiences combine aesthetic restraint with rigorous engineering."
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-surface-muted leading-relaxed">
                <p>
                  As an independent designer and frontend engineer, I believe that every interface should respect the visitor’s time. This means prioritizing typography over clutter, sub-second performance over bloated dependencies, and responsive flexibility across mobile and desktop devices.
                </p>
                <p>
                  I partner with founders, creative directors, and remote teams worldwide to turn ambitious visions into reliable, accessible software products that leave a lasting impression.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="primary" size="md">
                  Read Full Background & Skills
                </Button>
                <Button
                  href={`mailto:${BRAND_INFO.email}`}
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Direct Inquiry
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview Section */}
      <section aria-labelledby="services-overview-heading">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 mb-2 block">
              Areas of Practice
            </span>
            <h2
              id="services-overview-heading"
              className="fluid-h2 font-bold text-surface-text tracking-tight"
            >
              How We Can Collaborate
            </h2>
            <p className="text-sm sm:text-base text-surface-muted mt-3">
              Clear, transparent deliverables tailored for companies, agencies, and individual founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <Card
                key={service.id}
                variant="default"
                className="p-6 sm:p-8 flex flex-col justify-between hover:border-surface-border-hover transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-surface-text mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-subtle font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                  <span className="text-xs text-surface-subtle">
                    {service.deliverables.length} Key Deliverables
                  </span>
                  <Link
                    to="/services"
                    className="text-xs sm:text-sm font-medium text-surface-text hover:text-accent-600 dark:hover:text-accent-400 inline-flex items-center gap-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action Banner */}
      <section aria-labelledby="cta-heading">
        <Container size="default">
          <div className="bg-surface-card border border-surface-border rounded-3xl p-8 sm:p-12 text-center shadow-card-hover relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
                Start a Conversation
              </span>
              <h2
                id="cta-heading"
                className="fluid-h2 font-bold text-surface-text tracking-tight"
              >
                Have a project or opportunity in mind?
              </h2>
              <p className="text-sm sm:text-base text-surface-muted">
                Whether you need a bespoke personal portfolio, a modern design system, or a high-performance web experience, I would love to hear from you.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Send a Message
                </Button>
                <Button
                  href={`mailto:${BRAND_INFO.email}`}
                  variant="outline"
                  size="lg"
                  leftIcon={<Mail className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  {BRAND_INFO.email}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
