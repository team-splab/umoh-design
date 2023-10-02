import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Checkbox는 사용자가 Set에서 하나 이상의 항목을 선택할 수 있도록 하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `Checkbox를 사용하여 Option을 끄거나 켤 수 있습니다.\n
• disabled값으로 true | false 중 하나를 선택할 수 있습니다.`,
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Button의 disabled 여부를 설정합니다.',
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
} satisfies Meta<typeof Checkbox>;

export default meta;

export const DefaultCheckbox: StoryObj<typeof Checkbox> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Checkbox입니다.',
      },
    },
  },
  render: args => <Checkbox {...args} />,
};

export const WithTextCheckbox: StoryObj<typeof Checkbox> = {
  parameters: {
    docs: {
      description: {
        story: 'Text와 함께 사용한 Example Checkbox입니다.',
      },
    },
  },
  render: args => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" {...args} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <p className="text-muted-foreground text-sm">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const DisabledCheckbox: StoryObj<typeof Checkbox> = {
  parameters: {
    docs: {
      description: {
        story: '비활성화시 사용되는 Disabled Checkbox입니다.',
      },
    },
  },
  render: args => <Checkbox disabled {...args} />,
};
