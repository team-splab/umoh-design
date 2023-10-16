'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp, MessageSquarePlusIcon } from 'lucide-react';

import { cn } from 'lib/twUtils';
import { Badge } from 'components/Base/Badge/Badge';
import { ScrollArea } from 'components/Base/ScrollArea/ScrollArea';
import ChatTextField from './ChatTextField';

const Chat = AccordionPrimitive.Root;

const ChatContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'flex flex-col shadow-lg data-[state=closed]:h-full data-[state=open]:h-screen',
      className
    )}
    {...props}
  />
));
ChatContainer.displayName = 'AccordionItem';

const ChatTrigger = React.forwardRef<
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
ChatTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const ChatPreview = React.forwardRef<
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
ChatPreview.displayName = AccordionPrimitive.Header.displayName;

const ChatContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'flex h-full flex-col overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <ScrollArea className="h-full" type="scroll">
      {children}
    </ScrollArea>
    <div className="flex w-full">
      <ChatTextField />
    </div>
  </AccordionPrimitive.Content>
));
ChatContent.displayName = AccordionPrimitive.Content.displayName;

export { Chat, ChatContainer, ChatTrigger, ChatPreview, ChatContent };
