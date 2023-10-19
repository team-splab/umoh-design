'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp, MessageSquarePlusIcon, RefreshCwIcon } from 'lucide-react';

import { cn } from 'lib/twUtils';
import { ScrollArea } from 'components/Base/ScrollArea/ScrollArea';
import PostTextField from './PostTextField';

const Post = AccordionPrimitive.Root;

const PostContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'flex w-56 flex-col bg-white shadow-lg data-[state=open]:w-screen md:w-80 md:data-[state=open]:w-80',
      className
    )}
    {...props}
  />
));
PostContainer.displayName = 'AccordionItem';

const PostHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    refreshClick: () => void;
  }
>(({ className, refreshClick, children, ...props }, ref) => {
  const [effect, setEffect] = React.useState(false);

  return (
    <AccordionPrimitive.Trigger
      className={cn(
        'flex items-center justify-between border-b-2 font-medium text-primary-500 transition-all hover:bg-slate-100 [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1 p-2 text-sm md:p-4 md:text-base">
        <MessageSquarePlusIcon />
        Community Board
      </div>
      <div className="flex gap-1">
        <AccordionPrimitive.Header className="flex data-[state=closed]:hidden">
          <button
            className="rounded-full p-2 hover:bg-slate-300"
            onClick={e => {
              e.stopPropagation();
              refreshClick();
              setEffect(true);
            }}
            onAnimationEnd={() => setEffect(false)}
          >
            <RefreshCwIcon
              className={`h-4 w-4 shrink-0 delay-75 ${
                effect && 'animate-[spin_1s]'
              }`}
            />
          </button>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger
          ref={ref}
          className="rounded-full p-2 hover:bg-slate-300 [&[data-state=open]>svg]:rotate-180"
        >
          <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </div>
    </AccordionPrimitive.Trigger>
  );
});

const PostPreview = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Header>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header
    ref={ref}
    className={cn(
      'flex max-h-16 flex-col gap-1 p-2 data-[state=open]:hidden md:max-h-32 md:p-4',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Header>
));
PostPreview.displayName = AccordionPrimitive.Header.displayName;

const PostContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'relative flex-col overflow-hidden text-sm transition-all data-[state=closed]:h-full data-[state=open]:h-[calc(100vh-3rem)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:data-[state=open]:h-[calc(100vh-4rem)]',
      className
    )}
    {...props}
  >
    <div className="flex h-full flex-col">
      <ScrollArea className="flex h-full" type="scroll">
        {children}
      </ScrollArea>
      <PostTextField />
    </div>
  </AccordionPrimitive.Content>
));
PostContent.displayName = AccordionPrimitive.Content.displayName;

export { Post, PostContainer, PostHeader, PostPreview, PostContent };
