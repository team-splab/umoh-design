'use client';

import React from 'react';
import { Button, Skeleton, Textarea } from 'components';
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
      'flex w-56 flex-col bg-white shadow-lg transition-all duration-200 ease-out data-[state=open]:w-screen board-mobile:w-80 board-mobile:data-[state=open]:w-80',
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
     * @description 헤더 타이틀
     */
    headerTitle: string;
    /**
     * @description 새로고침 버튼 클릭 시 호출되는 콜백 함수
     */
    onRefreshClick: () => void;
  }
>(({ className, headerTitle, onRefreshClick, ...props }, ref) => {
  const [effect, setEffect] = React.useState(false);

  return (
    <AccordionPrimitive.Trigger
      className={cn(
        'flex items-center justify-between border-b-2 font-medium text-primary-500 hover:bg-slate-100',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1 p-2 text-sm board-mobile:p-4 board-mobile:text-base">
        <MessageSquarePlusIcon />
        {headerTitle}
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
          <ChevronUp className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out" />
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
      'flex max-h-16 flex-col gap-1 overflow-hidden p-2 transition-all duration-200 ease-out data-[state=open]:max-h-0 data-[state=open]:py-0 data-[state=closed]:opacity-100 data-[state=open]:opacity-0 board-mobile:max-h-32 board-mobile:p-4',
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
      'relative overflow-hidden text-sm h-board-content data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down board-mobile:h-board-content-md',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
BoardContent.displayName = 'BoardContent';

const BoardSendContainer = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'w-full items-center overflow-hidden transition-opacity duration-200 ease-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
BoardSendContainer.displayName = 'BoardSendContainer';

interface BoardTextFieldProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  onSubmit?: () => void;
}

const BoardTextField = React.forwardRef<
  HTMLTextAreaElement,
  BoardTextFieldProps
>(({ className, ...props }, ref) => (
  <Textarea
    className={cn(
      'min-h-0 resize-none rounded-none border-none px-4 py-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0',
      className
    )}
    ref={ref}
    autoComplete="off"
    onKeyDown={e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        props.onSubmit?.();
      }
    }}
    rows={1}
    {...props}
  />
));

BoardTextField.displayName = 'BoardTextField';

const BoardPostButton = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <Button
    type="submit"
    className={cn('mr-2 h-8 bg-primary-500 hover:bg-primary-600', className)}
    ref={ref}
    {...props}
  >
    {children}
  </Button>
));

BoardPostButton.displayName = 'BoardPostButton';

const BoardSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2 px-6 py-2', className)}
    {...props}
  >
    <div className="flex items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-lg" />
      <div className="flex w-56 flex-col items-start gap-2">
        <Skeleton className="flex h-3 w-12" />
        <Skeleton className="flex h-3 w-24" />
      </div>
    </div>
    <div className="flex flex-col gap-2 ">
      <Skeleton className="flex h-4 w-[250px]" />
      <Skeleton className="flex h-4 w-[200px]" />
    </div>
  </div>
));
BoardSkeleton.displayName = 'BoardSkeleton';

export {
  Board,
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardPostButton,
  BoardPreview,
  BoardSendContainer,
  BoardSkeleton,
  BoardTextField,
};
