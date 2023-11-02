import React from 'react';
import { Toggle } from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Toggle는 켜거나 끌 수 있는 2가지 상태 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- defaultPressed 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- pressed 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- disabled 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description:
        'Toggle의 asChild 값으로 true | false 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultPressed: {
      description:
        'Toggle의 defaultPressed 값으로 true | false 중 하나를 선택할 수 있습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    pressed: {
      description:
        'Toggle의 pressed 값으로 true | false 중 하나를 선택할 수 있습니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description:
        'Toggle의 disabled 값으로 true | false 중 하나를 선택할 수 있습니다.',
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
} satisfies Meta<typeof Toggle>;

export default meta;

export const DefaultToggle: StoryObj<typeof Toggle> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Toggle입니다.',
      },
    },
  },
  render: args => <Toggle {...args}>Toggle</Toggle>,
};
