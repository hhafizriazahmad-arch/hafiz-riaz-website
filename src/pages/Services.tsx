import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { SERVICES, BRAND_INFO } from '../data/content';
import {
  Layout,
  Code2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Mail,
} from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="w-6 h-6 text-accent-600 dark:text-accent-400" />;
      case 'figma':
        return <Code2 className="w-6 h-6 text-accent-600 dark:text-accent-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-accent-600 dark:text-accent-400" />;
      case 'shieldCheck':
        return <ShieldCheck className="w-6 h-6 text-accent-600 dark:text-accent-400" />;
      default:
        return <Layout className="w-6 h-6 text-accent-600 dark:text-accent-400" />;
    }
  };

  const PROCESS_STEPS = [
    {
      step: '01',
      title: 'Discovery & Scope',
      description:
        'We define the project objectives, target audience, technical requirements, and core visual references.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description:
        'Crafting responsive wireframes, design tokens, typography scales, and high-fidelity interactive previews.',
    },
    {
      step: '03',
      title: 'Engineering & Testing',
      description:
        'Building cleanly typed React components, verifying mobile/desktop ergonomics, and running accessibility checks.',
    },
    {
      step: '04',
      title: 'Launch & Handoff',
      description:
        'Deploying to production (e.g. Vercel), configuring domain and SEO metadata, and providing clear documentation.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-16 pt-6 sm:pt-10">
      {/* Services Header */}
      <section aria-labelledby="services-title">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
              Capabilities & Offerings
            </span>
            <h1
              id="services-title"
              className="fluid-h1 font-bold text-surface-text tracking-tight"
            >
              Services & Specialized Practice
            </h1>
            <p className="fluid-body text-surface-muted leading-relaxed">
              Transparent, outcome-oriented design and development services. Every project is crafted with direct personal attention, clean code, and zero compromise on accessibility.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detailed List */}
      <section aria-label="Detailed service offerings">
        <Container size="default">
          <div className="space-y-10 sm:space-y-12">
            {SERVICES.map((service, index) => (
              <Card
                key={service.id}
                variant="default"
                className="p-6 sm:p-10 lg:p-12 hover:border-surface-border-hover transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Overview */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-surface-border flex items-center justify-center mb-2">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-surface-subtle">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-surface-text mt-1">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-surface-subtle font-medium mt-1">
                        {service.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-surface-muted leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 text-xs text-surface-subtle">
                      <strong className="text-surface-text">Ideal for: </strong>
                      {service.idealFor}
                    </div>

                    <div className="pt-4">
                      <Button
                        href="/contact"
                        variant="primary"
                        size="md"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Inquire About This Service
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Outcomes & Deliverables */}
                  <div className="lg:col-span-7 bg-surface-elevated/40 border border-surface-border/60 rounded-2xl p-6 sm:p-8 space-y-6">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-surface-subtle mb-3">
                        Expected Outcomes & Impact
                      </h3>
                      <ul className="space-y-2.5">
                        {service.outcomes.map((outcome, oIdx) => (
                          <li
                            key={oIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-muted"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-surface-border/60">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-surface-subtle mb-3">
                        Key Deliverables
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="text-xs font-medium px-3 py-1 rounded-lg bg-surface-card border border-surface-border text-surface-text"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration Process */}
      <section aria-labelledby="process-heading">
        <Container size="default">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block mb-2">
              Methodology
            </span>
            <h2
              id="process-heading"
              className="fluid-h2 font-bold text-surface-text tracking-tight"
            >
              How We Work Together
            </h2>
            <p className="text-sm sm:text-base text-surface-muted mt-3">
              A transparent, structured four-step process keeping you informed at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-7 space-y-3 relative overflow-hidden"
              >
                <span className="text-3xl font-bold font-mono text-surface-border select-none block">
                  {step.step}
                </span>
                <h3 className="text-base font-semibold text-surface-text">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Footer Call to Action */}
      <section aria-label="Services direct consultation">
        <Container size="narrow">
          <div className="bg-surface-elevated/70 border border-surface-border rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-surface-text">
              Have a question about scope or fit?
            </h2>
            <p className="text-sm text-surface-muted max-w-lg mx-auto">
              If your requirements don’t fit neatly into a box, reach out directly. We can evaluate your goals and map out a tailored plan.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/contact" variant="primary" size="md">
                Schedule a Conversation
              </Button>
              <Button
                href={`mailto:${BRAND_INFO.email}`}
                variant="outline"
                size="md"
                leftIcon={<Mail className="w-4 h-4" />}
              >
                {BRAND_INFO.email}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
