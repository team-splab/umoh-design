import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';
import { Label } from 'components/Label/Label';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Switch는 사용자가 선택됨과 선택되지 않음 사이를 전환할 수 있게 해주는 컨트롤 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- defaultChecked 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- checked 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- disalbed 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- required 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Switch의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultChecked: {
      description: 'Switch의 defaultChecked 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      description: 'Switch의 checked 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Switch의 disabled 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    required: {
      description: 'Switch의 required 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
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
} satisfies Meta<typeof Switch>;

export default meta;

export const DefaultSwitch: StoryObj<typeof Switch> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Switch입니다.',
      },
    },
  },
  render: args => <Switch {...args} />,
};

export const ExampleSwitch: StoryObj<typeof Switch> = {
  parameters: {
    docs: {
      description: {
        story: 'Label과 함께 사용된 Example Switch입니다.',
      },
    },
  },
  render: args => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
