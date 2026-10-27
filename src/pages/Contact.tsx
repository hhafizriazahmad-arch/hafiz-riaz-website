import React from 'react';
import { Container } from '../components/ui/Container';
import { ContactForm } from '../components/forms/ContactForm';
import { BRAND_INFO } from '../data/content';
import { Mail, Clock, MapPin, ArrowUpRight, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-12 sm:space-y-16 pb-16 pt-6 sm:pt-10">
      {/* Contact Header */}
      <section aria-labelledby="contact-title">
        <Container size="default">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
              Direct Inquiries
            </span>
            <h1
              id="contact-title"
              className="fluid-h1 font-bold text-surface-text tracking-tight"
            >
              Let’s start a conversation.
            </h1>
            <p className="fluid-body text-surface-muted leading-relaxed">
              Whether you are planning a bespoke web project, need design system guidance, or want to discuss a potential collaboration, I would love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form and Contact Info */}
      <section aria-label="Contact options and inquiry form">
        <Container size="default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Info & Socials */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Card */}
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-7 shadow-subtle space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-surface-subtle">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="text-lg font-bold text-surface-text hover:text-accent-600 dark:hover:text-accent-400 transition-colors flex items-center gap-2 mt-1"
                  >
                    <Mail className="w-5 h-5 text-accent-600" />
                    <span>{BRAND_INFO.email}</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-surface-border space-y-4 text-xs text-surface-muted">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-surface-subtle flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-surface-text">Response Expectation</p>
                      <p>Typically within 24 to 48 business hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-surface-subtle flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-surface-text">Location & Timezone</p>
                      <p>Remote / International (collaborating across US, UK, and global timezones).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-surface-subtle flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-surface-text">Discovery Video Call</p>
                      <p>Available upon reviewing project requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="bg-surface-card border border-surface-border rounded-2xl p-6 shadow-subtle space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-surface-subtle">
                  Connect on Social Platforms
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <a
                    href="https://linkedin.com/in/hafiz-riaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-elevated hover:bg-surface-border transition-colors flex items-center justify-between text-xs font-medium text-surface-text touch-target"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-surface-subtle" />
                  </a>

                  <a
                    href="https://github.com/hafiz-riaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-elevated hover:bg-surface-border transition-colors flex items-center justify-between text-xs font-medium text-surface-text touch-target"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-surface-text" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-surface-subtle" />
                  </a>

                  <a
                    href="https://x.com/hafizriaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-surface-elevated hover:bg-surface-border transition-colors flex items-center justify-between text-xs font-medium text-surface-text touch-target"
                  >
                    <span className="flex items-center gap-2">
                      <Twitter className="w-4 h-4 text-sky-500" />
                      Twitter / X
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-surface-subtle" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
