import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Badge는 사용자에게 정보를 강조하거나 특정 요소에 주의를 끌기 위해 아이콘 또는 텍스트에 추가적인 요소를 사용하여 표시하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
배지 내의 콘텐츠는 일반적으로 숫자나 아이콘을 포함합니다.\n
- variant값으로 "default" | "secondary" | "destructive" | "outline" 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Badge의 Type을 설정합니다.',
      table: {
        type: { summary: 'BadgeVariant' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'secondary', 'destructive', 'outline'],
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
} satisfies Meta<typeof Badge>;

export default meta;

export const DefaultBadge: StoryObj<typeof Badge> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Badge입니다.',
      },
    },
  },
  render: args => (
    <Badge variant="default" {...args}>
      Badge
    </Badge>
  ),
};

export const SecondaryBadge: StoryObj<typeof Badge> = {
  parameters: {
    docs: {
      description: {
        story: '두 번째로 중요한 작업에 사용되는 Secondary Badge입니다.',
      },
    },
  },
  render: args => (
    <Badge variant="secondary" {...args}>
      secondary
    </Badge>
  ),
};

export const DestructiveBadge: StoryObj<typeof Badge> = {
  parameters: {
    docs: {
      description: {
        story: 'Error, Warning 등에 사용되는 Destructive Badge입니다.',
      },
    },
  },
  render: args => (
    <Badge variant="destructive" {...args}>
      destructive
    </Badge>
  ),
};

export const OutlineBadge: StoryObj<typeof Badge> = {
  parameters: {
    docs: {
      description: {
        story: 'label과 outline으로 구성된 Outline Badge입니다.',
      },
    },
  },
  render: args => (
    <Badge variant="outline" {...args}>
      outline
    </Badge>
  ),
};
