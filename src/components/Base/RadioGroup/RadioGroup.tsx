'use client';

import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from 'lib/twUtils';
import { Circle } from 'lucide-react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const radioGroupVariants = cva('', {
  variants: {
    variant: {
      default:
        'aspect-square h-4 w-4 rounded-full border border-gray-900 text-gray-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      onboarding:
        'flex appearance-none items-center justify-center whitespace-nowrap rounded-lg border border-primary-default bg-white p-4 text-brand body1-medium disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-primary-default/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant = 'default', children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupVariants({ variant, className }))}
      {...props}
    >
      {variant === 'default' ? (
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      ) : (
        children
      )}
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
