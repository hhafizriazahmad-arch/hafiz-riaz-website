import React, { useState } from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { BRAND_INFO, EXPERIENCE, SKILL_GROUPS, FAQS } from '../data/content';
import {
  ChevronDown,
  Briefcase,
  Layers,
  Heart,
  Globe2,
  Mail,
  ArrowRight,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const About: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-32 pb-16 pt-6 sm:pt-10">
      {/* Editorial Header */}
      <section aria-labelledby="about-title">
        <Container size="default">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
              About & Background
            </span>
            <h1
              id="about-title"
              className="fluid-h1 font-bold text-surface-text tracking-tight"
            >
              Building digital experiences with{' '}
              <span className="font-serif-editorial italic font-normal text-surface-text">
                deliberate simplicity
              </span>{' '}
              and engineering precision.
            </h1>
            <p className="fluid-body text-surface-muted leading-relaxed">
              I am Hafiz Riaz, an independent designer and developer working at the intersection of aesthetic restraint, modern web performance, and accessible user experience.
            </p>
          </div>
        </Container>
      </section>

      {/* Narrative & Visual Portrait Section */}
      <section aria-label="Personal narrative and philosophy">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Visual Portrait / Identity Box */}
            <div className="lg:col-span-5">
              <div className="bg-surface-card border border-surface-border rounded-3xl p-8 sm:p-10 shadow-elevated sticky top-28 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-surface-text text-surface-canvas flex items-center justify-center font-bold text-3xl tracking-tight shadow-sm">
                  HR
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-surface-text">
                    {BRAND_INFO.name}
                  </h2>
                  <p className="text-sm text-surface-subtle font-medium mt-0.5">
                    {BRAND_INFO.title}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border space-y-3 text-xs text-surface-muted">
                  <div className="flex items-center justify-between">
                    <span className="text-surface-subtle">Practice</span>
                    <span className="font-medium text-surface-text">Independent Studio</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-subtle">Location</span>
                    <span className="font-medium text-surface-text">{BRAND_INFO.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-subtle">Languages</span>
                    <span className="font-medium text-surface-text">English, Urdu (Native)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-subtle">Availability</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">Open for Select Work</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Start a Conversation
                  </Button>
                </div>
              </div>
            </div>

            {/* Extended Biography & Core Beliefs */}
            <div className="lg:col-span-7 space-y-8 text-surface-muted leading-relaxed text-sm sm:text-base">
              <div className="space-y-4 text-surface-text">
                <h3 className="text-xl font-semibold tracking-tight text-surface-text">
                  The Journey & Perspective
                </h3>
                {BRAND_INFO.fullBio.map((paragraph, idx) => (
                  <p key={idx} className="text-surface-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Guiding Principles */}
              <div className="pt-4 border-t border-surface-border space-y-5">
                <h3 className="text-xl font-semibold tracking-tight text-surface-text">
                  Core Guiding Principles
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-600 mb-2">
                      <Heart className="w-4 h-4" />
                    </div>
                    <h4 className="font-medium text-surface-text text-sm">
                      Clarity Above Clutter
                    </h4>
                    <p className="text-xs text-surface-muted">
                      Removing ornamental noise so core content and visual hierarchy shine effortlessly.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-600 mb-2">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-medium text-surface-text text-sm">
                      Accessibility by Default
                    </h4>
                    <p className="text-xs text-surface-muted">
                      Strict adherence to WCAG 2.2 AA standards so digital experiences remain inclusive for all users.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-600 mb-2">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h4 className="font-medium text-surface-text text-sm">
                      Responsive Adaptability
                    </h4>
                    <p className="text-xs text-surface-muted">
                      Carefully designed thumb-friendly layouts on mobile phones and spacious multi-column elegance on laptops.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-card border border-surface-border space-y-1.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-elevated flex items-center justify-center text-accent-600 mb-2">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <h4 className="font-medium text-surface-text text-sm">
                      Reliable Engineering
                    </h4>
                    <p className="text-xs text-surface-muted">
                      Strongly typed React & TypeScript code, tested thoroughly with minimal runtime dependencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Experience & Career Milestones */}
      <section aria-labelledby="experience-heading">
        <Container size="default">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block mb-2">
              Career Timeline
            </span>
            <h2
              id="experience-heading"
              className="fluid-h2 font-bold text-surface-text tracking-tight"
            >
              Professional Background & Experience
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((item, idx) => (
              <Card
                key={idx}
                variant="default"
                className="p-6 sm:p-8 hover:border-surface-border-hover transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-surface-text">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-surface-subtle">
                      {item.organization} · {item.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-surface-elevated text-surface-muted border border-surface-border w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-surface-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-surface-border/60">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technical Skill Groups */}
      <section aria-labelledby="skills-heading">
        <Container size="default">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block mb-2">
              Toolbox & Competencies
            </span>
            <h2
              id="skills-heading"
              className="fluid-h2 font-bold text-surface-text tracking-tight"
            >
              Skills & Engineering Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SKILL_GROUPS.map((group, idx) => (
              <div
                key={idx}
                className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-7 space-y-4 shadow-subtle"
              >
                <h3 className="text-base font-semibold text-surface-text border-b border-surface-border pb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs sm:text-sm text-surface-muted flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section aria-labelledby="faqs-heading">
        <Container size="narrow">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block mb-2">
              Common Questions
            </span>
            <h2
              id="faqs-heading"
              className="fluid-h2 font-bold text-surface-text tracking-tight"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-surface-card border border-surface-border rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-sm sm:text-base text-surface-text">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 text-surface-subtle transition-transform duration-200 flex-shrink-0',
                        isOpen && 'rotate-180 text-surface-text'
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-surface-muted leading-relaxed border-t border-surface-border/60 pt-4 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Direct Contact Banner */}
      <section aria-label="Contact invitation">
        <Container size="default">
          <div className="bg-surface-elevated/70 border border-surface-border rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-surface-text">
                Ready to talk about your next project?
              </h3>
              <p className="text-sm text-surface-muted max-w-lg">
                I am always interested in discussing new opportunities, design systems, and thoughtful collaborations.
              </p>
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              leftIcon={<Mail className="w-4 h-4" />}
            >
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};
