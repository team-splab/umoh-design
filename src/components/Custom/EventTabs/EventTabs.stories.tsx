import React from 'react';
import { EventTabs, EventTabsList, EventTabsTrigger } from 'components';
import { Home, Laugh, MessageCircle, Users } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CustomComponent/EventTabs',
  component: EventTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'EventTabs는 이벤트 페이지 섹션 간 이동 시 사용하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
- activationMode 값으로 "automatic" | "manual" 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description:
        'EventTabs의 asChild 값으로 true | false 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    dir: {
      description:
        'EventTabs의 dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    activationMode: {
      description:
        'EventTabs의 activationMode 값으로 "automatic" | "manual" 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'automatic' },
      },
      options: ['automatic', 'manual'],
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
} satisfies Meta<typeof EventTabs>;

export default meta;

export const DefaultEventTabs: StoryObj<typeof EventTabs> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default EventTabs입니다.',
      },
    },
  },
  render: args => (
    <EventTabs defaultValue="home" className="w-[400px]" {...args}>
      <EventTabsList>
        <EventTabsTrigger value="home">
          <Home className="h-6 w-6" />
          Home
        </EventTabsTrigger>
        <EventTabsTrigger value="cards">
          <Users className="h-6 w-6" />
          Cards
        </EventTabsTrigger>
        <EventTabsTrigger value="forum">
          <Laugh className="h-6 w-6" />
          Forum
        </EventTabsTrigger>
        <EventTabsTrigger value="meet">
          <MessageCircle className="h-6 w-6" />
          Meet
        </EventTabsTrigger>
      </EventTabsList>
    </EventTabs>
  ),
};
