import React from 'react';
import { Container } from '../components/ui/Container';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const Privacy: React.FC = () => {
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
              Legal & Transparency
            </span>
            <h1 className="fluid-h1 font-bold text-surface-text tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-surface-subtle font-mono">
              Last updated: October 2026 · Hafiz Riaz Portfolio
            </p>
          </header>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              1. Overview & Commitment
            </h2>
            <p>
              This privacy policy outlines how personal information is handled when you visit the personal brand website of <strong>Hafiz Riaz</strong> (accessible at <code className="text-xs font-mono bg-surface-elevated px-1.5 py-0.5 rounded">https://hafizriaz.com</code> or associated staging domains).
            </p>
            <p>
              I respect your personal privacy. I do not run intrusive third-party ad trackers, invasive analytics scripts, or sell visitor data to data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              2. Information Collected Through the Contact Form
            </h2>
            <p>
              When you submit a project inquiry or contact message via the website form, you provide information including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-surface-muted">
              <li>Your full name</li>
              <li>Your email address</li>
              <li>Inquiry category and message subject</li>
              <li>Project scope description and relevant details</li>
            </ul>
            <p>
              This information is used strictly to communicate with you regarding your inquiry, evaluate project feasibility, and provide requested professional proposals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              3. Cookies & Local Storage
            </h2>
            <p>
              This website uses only privacy-friendly, functional local storage to remember your visual theme preference (light mode versus dark mode). No tracking cookies or advertising pixels are placed on your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              4. External Links
            </h2>
            <p>
              This portfolio contains links to external platforms such as GitHub, LinkedIn, and Twitter/X. Once you navigate to these external services, their respective privacy policies and terms of use apply.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-surface-text">
              5. Contacting Hafiz Riaz
            </h2>
            <p>
              If you have any questions regarding this privacy policy or wish to request the deletion of any inquiry communications, please contact me directly at:
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
