'use client';

import React from 'react';
import { useState, type WheelEvent } from 'react';
import { cn } from 'lib/twUtils';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  shadow?: boolean;
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, shadow, ...props }, ref) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const onScrollHandler = (event: WheelEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
    setScrollHeight(event.currentTarget.scrollHeight);
    setClientHeight(event.currentTarget.clientHeight);
  };

  const getVisibleSides = (): { top: boolean; bottom: boolean } => {
    const isBottom = clientHeight === scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

    return {
      top: (isBottom || isBetween) && !(isTop && isBottom),
      bottom: (isTop || isBetween) && !(isTop && isBottom),
    };
  };

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        onScroll={onScrollHandler}
        className="h-full w-full rounded-[inherit]"
      >
        {shadow ? (
          <div>
            <div
              className={`pointer-events-none sticky top-0 z-10 -mb-4 h-4 w-full bg-gradient-to-b from-gray-100 transition-opacity duration-300 ${
                getVisibleSides().top ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {children}
            <div
              className={`pointer-events-none sticky bottom-0 -mt-4 h-4 w-full rotate-180 bg-gradient-to-b from-gray-100 transition-opacity duration-300 ${
                getVisibleSides().bottom ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        ) : (
          children
        )}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-2.5 border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        'relative rounded-full bg-gray-200',
        orientation === 'vertical' && 'flex-1'
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
