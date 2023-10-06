import type { Meta, StoryObj } from '@storybook/react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from 'components/NavigationMenu/NavigationMenu';

import { cn } from 'lib/twUtils';
import Link from 'next/link';
import { forwardRef } from 'react';

const meta = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'NavigationMenu는 사용자가 필요한 것을 찾도록 도와주며 현재 위치를 알려주는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- delayDuration 값으로 number를 입력할 수 있습니다.
- skipDelayDuration 값으로 number를 입력할 수 있습니다.
- dir 값으로 'ltr' | 'rtl'를 입력할 수 있습니다.
- orientation 값으로 'horizontal' | 'vertical'를 입력할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    delayDuration: {
      description: 'NavigationMenu가 열리는데 걸리는 시간을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
      control: {
        type: 'number',
      },
    },
    skipDelayDuration: {
      description:
        'NavigationMenu가 다른 트리거로 skip되는데 걸리는 시간을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
      },
    },
    dir: {
      description: 'NavigationMenu의 읽기 방향을 설정합니다.',
      table: {
        type: { summary: 'ltr | rtl' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    orientation: {
      description: 'NavigationMenu의 메뉴 방향을 설정합니다.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [
    Story => (
      <div className="p-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavigationMenu>;

export default meta;

export const DefaultNavigationMenu: StoryObj<typeof NavigationMenu> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default NavigationMenu입니다.',
      },
    },
  },
  render: args => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export const WithLinkNavigationMenu: StoryObj<typeof NavigationMenu> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 Example NavigationMenu입니다.',
      },
    },
  },
  render: args => (
    <NavigationMenu {...args}>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenu>
  ),
};

export const ExampleNavigationMenu: StoryObj<typeof NavigationMenu> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 Example NavigationMenu입니다.',
      },
    },
  },
  render: args => {
    const components: { title: string; href: string; description: string }[] = [
      {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
      },
      {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    ];

    const ListItem = forwardRef<
      React.ElementRef<'a'>,
      React.ComponentPropsWithoutRef<'a'>
    >(({ className, title, children, ...props }, ref) => {
      return (
        <li>
          <NavigationMenuLink asChild>
            <a
              ref={ref}
              className={cn(
                'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            </a>
          </NavigationMenuLink>
        </li>
      );
    });
    ListItem.displayName = 'ListItem';

    return (
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map(component => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  },
};
