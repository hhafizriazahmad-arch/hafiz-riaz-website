import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { BRAND_INFO } from '../../data/content';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="w-4 h-4" aria-hidden="true" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4" aria-hidden="true" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" aria-hidden="true" />;
      case 'mail':
        return <Mail className="w-4 h-4" aria-hidden="true" />;
      default:
        return <ArrowUpRight className="w-4 h-4" aria-hidden="true" />;
    }
  };

  return (
    <footer className="w-full bg-surface-canvas border-t border-surface-border mt-20 pt-16 pb-12 transition-colors">
      <Container size="default">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-surface-border">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-surface-text font-bold text-xl tracking-tight"
            >
              <div className="w-7 h-7 rounded-lg bg-surface-text text-surface-canvas flex items-center justify-center font-bold text-xs">
                HR
              </div>
              <span>Hafiz Riaz</span>
            </Link>
            <p className="text-surface-muted text-sm sm:text-base leading-relaxed max-w-sm">
              {BRAND_INFO.shortBio}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-surface-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select design & development work</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-surface-text">
              Navigation
            </span>
            <ul className="space-y-2 text-sm text-surface-muted">
              <li>
                <Link
                  to="/"
                  className="hover:text-surface-text transition-colors py-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-surface-text transition-colors py-1 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-surface-text transition-colors py-1 inline-block"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-surface-text transition-colors py-1 inline-block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-surface-text transition-colors py-1 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-surface-text">
              Connect & Inquire
            </span>
            <p className="text-sm text-surface-muted">
              Have an idea, project, or opportunity you would like to discuss?
            </p>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="text-sm font-medium text-surface-text hover:text-accent-600 dark:hover:text-accent-400 transition-colors py-1 inline-flex items-center gap-1.5"
            >
              <span>{BRAND_INFO.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {BRAND_INFO.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-surface-border bg-surface-card text-surface-muted hover:text-surface-text hover:border-surface-border-hover transition-colors touch-target"
                  aria-label={`Visit Hafiz Riaz on ${social.label}`}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-subtle">
          <p>© {currentYear} Hafiz Riaz. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-surface-text transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-surface-text transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
