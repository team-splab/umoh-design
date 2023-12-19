'use client';

import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'lib/twUtils';
import { Check } from 'lucide-react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const checkBoxVariants = cva('', {
  variants: {
    variant: {
      default:
        'peer h-4 w-4 shrink-0 rounded-sm border border-gray-900 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50',
      chip: 'flex appearance-none items-center justify-center whitespace-nowrap rounded-full border-[1px] bg-gray-200 px-4 py-2 text-black body2-medium disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:border-blue-400 data-[state=checked]:bg-primary-default data-[state=checked]:text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface CheckBoxItemProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkBoxVariants> {}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckBoxItemProps
>(({ className, variant = 'default', children, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(checkBoxVariants({ variant, className }))}
    {...props}
  >
    {variant === 'default' ? (
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    ) : (
      children
    )}{' '}
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
