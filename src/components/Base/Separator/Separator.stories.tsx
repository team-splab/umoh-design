import React from 'react';
import { Separator } from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Separator는 콘텐츠를 시각적으로 또는 의미적으로 분리하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- orientation 값으로 "horizontal" | "vertical" 중 하나를 선택할 수 있습니다.\n
- decorative 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Separator의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    orientation: {
      description: 'Separator의 orientation을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'horizontal' },
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    decorative: {
      description: 'Separator의 decorative 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
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
} satisfies Meta<typeof Separator>;

export default meta;

export const DefaultSeparator: StoryObj<typeof Separator> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Separator입니다.',
      },
    },
  },
  render: args => <Separator {...args} />,
};

export const ExampleSeparator: StoryObj<typeof Separator> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 Example Separator 입니다.',
      },
    },
  },
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-muted-foreground text-sm">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};
