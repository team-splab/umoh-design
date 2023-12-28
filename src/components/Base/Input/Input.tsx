import React from 'react';
import { cn } from 'lib/twUtils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftElement, rightElement, ...props }, ref) => {
    return (
      <div className="relative">
        {leftElement && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftElement}
          </span>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {rightElement && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightElement}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
