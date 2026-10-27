import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SkipLink } from '../ui/SkipLink';

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-surface-canvas text-surface-text transition-colors">
      <SkipLink />
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};
