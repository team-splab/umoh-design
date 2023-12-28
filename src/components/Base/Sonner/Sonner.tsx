'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';
type ToasterProps = React.ComponentProps<typeof Toaster>;

const Sonner = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Toaster
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-slate-500',
          actionButton:
            'group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50',
          cancelButton:
            'group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500',
        },
      }}
      {...props}
    />
  );
};

export { Sonner };
