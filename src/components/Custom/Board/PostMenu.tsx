'use client';

import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from 'components';
import { MoreVerticalIcon } from 'lucide-react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const PostMenu = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root> & {
    isHost: boolean;
    menuItems?: {
      id: string;
      icon?: React.ReactNode;
      text: string;
      separator?: boolean;
      onClick?: () => void;
      itemProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Item>;
    }[];
    contentProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
  }
>(({ isHost, menuItems, contentProps, ...props }, ref) => (
  <>
    <DropdownMenu {...props}>
      <DropdownMenuTrigger>
        <button
          className={`rounded-full p-2 ${
            isHost ? 'hover:bg-amber-200/50' : 'hover:bg-slate-200/50'
          }`}
        >
          <MoreVerticalIcon className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent ref={ref} {...contentProps}>
        {menuItems?.map(item => (
          <>
            <DropdownMenuItem
              key={item.id}
              onClick={item.onClick}
              {...item.itemProps}
            >
              {item.icon}
              <span>{item.text}</span>
            </DropdownMenuItem>
            {item.separator ? <DropdownMenuSeparator /> : null}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </>
));
PostMenu.displayName = 'PostMenu';

export { PostMenu };
