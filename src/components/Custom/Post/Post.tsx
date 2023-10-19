'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp, MessageSquarePlusIcon } from 'lucide-react';

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

const PostTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between border-b-2 p-2 font-medium text-primary-500 transition-all md:p-4 [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1 text-sm md:text-base">
        <MessageSquarePlusIcon />
        Community Board
      </div>
      <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
PostTrigger.displayName = AccordionPrimitive.Trigger.displayName;

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

export { Post, PostContainer, PostTrigger, PostPreview, PostContent };
