import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-surface-card text-surface-text border border-surface-border rounded-lg shadow-elevated font-medium text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-500"
    >
      Skip to main content
    </a>
  );
};
