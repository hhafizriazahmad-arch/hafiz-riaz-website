import React from 'react';
import { Container } from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Terms: React.FC = () => {
  return (
    <div className="py-10 sm:py-16">
      <Container size="narrow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-surface-muted hover:text-surface-text mb-8 transition-colors touch-target"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Homepage</span>
        </Link>

        <article className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-sm sm:text-base text-surface-muted leading-relaxed">
          <header className="space-y-2 border-b border-surface-border pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400 block">
              Legal & Terms
            </span>
            <h1 className="fluid-h1 font-bold text-surface-text tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-surface-subtle font-mono">
              Last updated: October 2026 · Hafiz Riaz Portfolio
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (<code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">https://hafizriaz.com</code>), you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please refrain from using the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              2. Intellectual Property Rights
            </h2>
            <p>
              All original content, designs, copy, code samples, graphics, and brand trademarks belonging to <strong>Hafiz Riaz</strong> are protected by applicable intellectual property and copyright laws.
            </p>
            <p>
              Open-source repositories referenced in the portfolio are governed by their respective licenses (e.g. MIT, Apache 2.0). Client proprietary work and brand identities shown belong to their respective owners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              3. Professional Engagement & Proposals
            </h2>
            <p>
              Information presented on this website does not constitute a binding legal contract or formal offer of service. All project collaborations, deliverables, and timelines are established through mutual, written agreements prior to project commencement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              4. Disclaimer of Warranties
            </h2>
            <p>
              This website and its materials are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              5. Governing Law & Contact
            </h2>
            <p>
              For inquiries regarding these terms or licensing inquiries, please reach out via email:
            </p>
            <p className="font-mono text-sm text-surface-text bg-surface-card p-3 rounded-xl border border-surface-border inline-block">
              <a href={`mailto:${BRAND_INFO.email}`} className="text-accent-600 hover:underline">
                {BRAND_INFO.email}
              </a>
            </p>
          </section>
        </article>
      </Container>
    </div>
  );
};
