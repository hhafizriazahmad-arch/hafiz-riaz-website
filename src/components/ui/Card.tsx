import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'interactive';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300 overflow-hidden';

  const variantClasses = {
    default: 'bg-surface-card border border-surface-border shadow-subtle',
    elevated: 'bg-surface-card border border-surface-border shadow-elevated',
    outline: 'bg-transparent border border-surface-border',
    interactive:
      'bg-surface-card border border-surface-border hover:border-surface-border-hover hover:shadow-card-hover dark:hover:shadow-dark-card hover:-translate-y-1',
  }[variant];

  return (
    <div className={cn(baseClasses, variantClasses, className)} {...props}>
      {children}
    </div>
  );
};
