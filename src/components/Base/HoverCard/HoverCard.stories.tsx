import type { Meta, StoryObj } from '@storybook/react';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'components/Base/HoverCard/HoverCard';

import { Button } from 'components/Base/Button/Button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'components/Base/Avatar/Avatar';

import { CalendarDays } from 'lucide-react';

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'HoverCard는 사용자가 텍스트에 Hover시 Preview로 볼 수 있는 Card를 띄워주는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- openDelay 값으로 number를 입력할 수 있습니다.\n
- closeDelay 값으로 number를 입력할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    openDelay: {
      description:
        'openDelay 값만큼 HoverCard가 열리는 시간을 지연시킬 수 있습니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '700' },
      },
      control: {
        type: 'number',
      },
    },
    closeDelay: {
      description:
        'closeDelay 값만큼 HoverCard가 닫히는 시간을 지연시킬 수 있습니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
      control: {
        type: 'number',
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
} satisfies Meta<typeof HoverCard>;

export default meta;

export const DefaultHoverCard: StoryObj<typeof HoverCard> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default HoverCard입니다.',
      },
    },
  },
  render: args => (
    <HoverCard {...args}>
      <HoverCardTrigger>Hover</HoverCardTrigger>
      <HoverCardContent>
        The React Framework – created and maintained by @vercel.
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ExampleHoverCard: StoryObj<typeof HoverCard> = {
  parameters: {
    docs: {
      description: {
        story: 'Avatar와 Button을 함께 사용한 Example HoverCard입니다.',
      },
    },
  },
  render: args => (
    <HoverCard {...args}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/grayashh.png" />
              <AvatarFallback>Grayashh</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@grayashh</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-muted-foreground text-xs">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </HoverCard>
  ),
};
