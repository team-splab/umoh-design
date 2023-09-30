import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'lib/twUtils';

const badgeVariants = cva(
  'focus:ring-primary-950 inline-flex items-center rounded-full border border-primary-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-primary-300',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary-900 text-primary-50 hover:bg-primary-900/80 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/80',
        secondary:
          'border-transparent bg-primary-100 text-primary-900 hover:bg-primary-100/80 dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80',
        destructive:
          'border-transparent bg-red-500 text-primary-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/80',
        outline: 'text-primary-900 dark:border-primary-50 dark:text-primary-50',
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
