import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'lib/twUtils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-default text-white hover:bg-primary-hover',
        secondary:
          'border-transparent bg-gray-100 text-gray-900 hover:bg-gray-100/80',
        destructive:
          'border-transparent bg-danger-default text-gray-50 hover:bg-danger-hover',
        outline: 'text-gray-950',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
