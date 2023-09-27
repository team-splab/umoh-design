import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from 'lib/twUtils';

const alertVariants = cva(
  'relative w-full rounded-lg border border-primary-200 p-4 dark:border-primary-800 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-primary-900 dark:[&>svg]:text-primary-50 [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default:
          'bg-white text-primary-900 dark:bg-primary-900 dark:text-primary-50',
        destructive:
          'border-red-500/50 text-red-500 dark:border-red-500 dark:border-red-900/50 dark:dark:border-red-900 dark:text-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
