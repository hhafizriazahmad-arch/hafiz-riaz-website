import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none touch-target';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[38px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-6 py-3 min-h-[50px] gap-2.5',
  }[size];

  const variantClasses = {
    primary:
      'bg-surface-text text-surface-canvas hover:opacity-90 active:scale-[0.98] shadow-sm',
    secondary:
      'bg-surface-elevated text-surface-text hover:bg-surface-border active:scale-[0.98]',
    outline:
      'border border-surface-border bg-transparent text-surface-text hover:bg-surface-elevated hover:border-surface-border-hover active:scale-[0.98]',
    ghost:
      'bg-transparent text-surface-text hover:bg-surface-elevated active:scale-[0.98]',
    accent:
      'bg-accent-600 text-white hover:bg-accent-700 active:scale-[0.98] shadow-sm',
  }[variant];

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  const combinedClasses = cn(baseClasses, sizeClasses, variantClasses, className);

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
