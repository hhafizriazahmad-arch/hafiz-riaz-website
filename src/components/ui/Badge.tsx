import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full tracking-wide transition-colors';

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size];

  const variantClasses = {
    default: 'bg-surface-elevated text-surface-muted border border-surface-border',
    accent: 'bg-accent-50 text-accent-700 dark:bg-accent-950/40 dark:text-accent-300 border border-accent-200 dark:border-accent-800/40',
    outline: 'border border-surface-border text-surface-muted bg-transparent',
    neutral: 'bg-surface-text text-surface-canvas',
  }[variant];

  return (
    <span className={cn(baseClasses, sizeClasses, variantClasses, className)} {...props}>
      {children}
    </span>
  );
};
