'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp, MessageSquarePlusIcon } from 'lucide-react';

import { cn } from 'lib/twUtils';
import { Badge } from 'components/Base/Badge/Badge';
import { ScrollArea } from 'components/Base/ScrollArea/ScrollArea';
import PostTextField from './PostTextField';

const Post = AccordionPrimitive.Root;

const PostContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('flex flex-col bg-white shadow-lg', className)}
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
        'flex flex-1 items-center justify-between border-b-2 p-4 font-medium text-primary-500 transition-all [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
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
      'flex flex-col gap-1 p-4 data-[state=open]:hidden',
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-1">
      📩 Min <Badge>Host</Badge>
    </div>
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
      'relative flex-col overflow-hidden text-sm transition-all data-[state=closed]:h-full data-[state=open]:h-[calc(100vh-4rem)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
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
