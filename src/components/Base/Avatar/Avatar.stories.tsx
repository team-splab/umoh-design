import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Avatar는 사용자를 나타내기 위한 대체 이미지 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Avatar asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
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
} satisfies Meta<typeof Avatar>;

export default meta;

export const DefaultAvatar: StoryObj<typeof Avatar> = {
  render: args => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/grayashh.png" alt="@gryashh" />
      <AvatarFallback>Grayash</AvatarFallback>
    </Avatar>
  ),
};
