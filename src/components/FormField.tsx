import React from 'react';

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function FormField({ id, label, error, optional, className = '', children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline justify-between text-xs font-semibold uppercase tracking-[0.12em] text-ink">
        {label}
        {optional && <span className="text-[11px] font-normal normal-case tracking-normal text-muted">Optional</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error &&
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-red-700">
          {error}
        </p>
      }
    </div>);

}

export const inputClass = (hasError: boolean) =>
`w-full rounded-sm border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors duration-150 focus:outline-none focus:ring-1 ${
hasError ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : 'border-line focus:border-pine focus:ring-pine'}`;