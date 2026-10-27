import React from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-content',
    wide: 'max-w-7xl',
    full: 'max-w-full',
  }[size];

  return (
    <div
      className={cn('w-full mx-auto px-4 sm:px-6 md:px-8', sizeClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
};
