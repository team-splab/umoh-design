'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronUp } from 'lucide-react';

import { cn } from 'lib/twUtils';
import { Badge } from 'components/Badge/Badge';
import { Card } from 'components/Card/Card';

const Chat = AccordionPrimitive.Root;

const ChatContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('flex max-w-[344px] flex-col shadow-lg', className)}
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
        {/* 임시 아이콘  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 1.99994H4C2.9 1.99994 2 2.89994 2 3.99994V21.9999L6 17.9999H20C21.1 17.9999 22 17.0999 22 15.9999V3.99994C22 2.89994 21.1 1.99994 20 1.99994ZM20 15.9999H5.17L4 17.1699V3.99994H20V15.9999Z"
            fill="#7433FF"
          />
          <path
            d="M12 14.9999L13.57 11.5699L17 9.99994L13.57 8.42994L12 4.99994L10.43 8.42994L7 9.99994L10.43 11.5699L12 14.9999Z"
            fill="#7433FF"
          />
        </svg>
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
      'h-[80vh] overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
ChatContent.displayName = AccordionPrimitive.Content.displayName;

const ChatCard = React.forwardRef<
  React.ElementRef<typeof Card>,
  React.ComponentPropsWithoutRef<typeof Card>
>(({ className, children, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn('flex flex-col gap-1 p-4', className)}
    {...props}
  >
    {children}
  </Card>
));

export { Chat, ChatContainer, ChatTrigger, ChatPreview, ChatContent };
