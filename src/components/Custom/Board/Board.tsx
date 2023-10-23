'use client';

import React from 'react';
import { Button } from 'components/Base/Button/Button';
import { Input } from 'components/Base/Input/Input';
import { ScrollArea } from 'components/Base/ScrollArea/ScrollArea';
import { cn } from 'lib/twUtils';
import { ChevronUp, MessageSquarePlusIcon, RefreshCwIcon } from 'lucide-react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

const Board = AccordionPrimitive.Root;

const BoardContainer = React.forwardRef<
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
BoardContainer.displayName = 'BoardContainer';

const BoardHeader = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /**
     * @description 새로고침 버튼 클릭 시 호출되는 콜백 함수
     */
    onRefreshClick: () => void;
  }
>(({ className, onRefreshClick, ...props }, ref) => {
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
              onRefreshClick();
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

const BoardPreview = React.forwardRef<
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
BoardPreview.displayName = 'BoardPreview';

const BoardContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'relative overflow-hidden text-sm transition-all data-[state=closed]:h-full data-[state=open]:h-[calc(100vh-5rem)] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down md:data-[state=open]:h-[calc(100vh-6rem)]',
      className
    )}
    {...props}
  >
    <ScrollArea className="flex h-full" type="scroll">
      {children}
    </ScrollArea>
  </AccordionPrimitive.Content>
));
BoardContent.displayName = 'BoardContent';

const BoardSendContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn('flex w-full items-center', className)}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
BoardSendContainer.displayName = 'BoardSendContainer';

const BoardTextField = React.forwardRef<
  HTMLInputElement,
  React.HTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <Input
    className={cn(
      'rounded-none border-none px-4 py-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
      className
    )}
    ref={ref}
    autoComplete="off"
    {...props}
  />
));

BoardTextField.displayName = 'BoardTextField';

const BoardPostButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <Button
    type="submit"
    className={cn('mr-2 h-8 bg-primary-500 hover:bg-primary-600', className)}
    ref={ref}
    {...props}
  >
    Post
  </Button>
));

BoardPostButton.displayName = 'BoardPostButton';

export {
  Board,
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardPostButton,
  BoardPreview,
  BoardSendContainer,
  BoardTextField,
};
