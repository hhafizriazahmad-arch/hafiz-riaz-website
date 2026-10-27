import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Home, Layers } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="py-20 sm:py-28 md:py-36 text-center">
      <Container size="narrow">
        <div className="bg-surface-card border border-surface-border rounded-3xl p-8 sm:p-14 shadow-card-hover max-w-lg mx-auto space-y-6">
          <span className="font-mono text-sm font-semibold text-accent-600 uppercase tracking-widest block">
            404 Error
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-surface-text tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-surface-muted leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let’s get you back on track.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Return to Homepage
            </Button>
            <Button
              href="/portfolio"
              variant="outline"
              size="md"
              leftIcon={<Layers className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Explore Portfolio
            </Button>
          </div>

          <div className="pt-6 border-t border-surface-border text-xs text-surface-subtle">
            <p>
              Looking for something specific? Feel free to{' '}
              <Link to="/contact" className="text-accent-600 hover:underline">
                contact Hafiz Riaz
              </Link>{' '}
              directly.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
