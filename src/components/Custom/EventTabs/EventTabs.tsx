'use client';

import React from 'react';
import { cn } from 'lib/twUtils';

import * as TabsPrimitive from '@radix-ui/react-tabs';

const EventTabs = TabsPrimitive.Root;

const EventTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex w-full items-center justify-between px-6 py-1.5 text-gray-500 tablet:py-0',
      className
    )}
    {...props}
  />
));
EventTabsList.displayName = TabsPrimitive.List.displayName;

const EventTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex h-full w-full flex-col items-center justify-center whitespace-nowrap rounded-none border-b border-transparent bg-white p-0 px-4 py-2 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-black data-[state=active]:text-gray-950',
      className
    )}
    {...props}
  />
));
EventTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { EventTabs, EventTabsList, EventTabsTrigger };
