import React from 'react';
import { cn } from '../../utils/cn';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, id, error, helperText, className, required, rows = 4, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col space-y-1.5 w-full">
        <label
          htmlFor={inputId}
          className="text-xs sm:text-sm font-medium text-surface-text flex items-center justify-between"
        >
          <span>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </span>
          {helperText && (
            <span className="text-xs text-surface-subtle font-normal">
              {helperText}
            </span>
          )}
        </label>
        <textarea
          id={inputId}
          ref={ref}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          className={cn(
            'w-full px-3.5 py-2.5 rounded-xl border bg-surface-card text-surface-text text-sm transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 resize-y min-h-[100px]',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-surface-border hover:border-surface-border-hover',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-500 font-medium pt-0.5">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';
