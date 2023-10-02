import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { Checkbox } from 'components/Checkbox/Checkbox';

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Label는 컨트롤과 연결된 접근 가능한 label을 렌더링하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `• asChild값으로 true | false 중 하나를 선택할 수 있습니다.\n
• htmlFor값으로 label이 연결된 요소의 ID를 작성할 수 있습니다.`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Label의 asChild 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    htmlFor: {
      description: 'Label의 htmlFor를 설정합니다.',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
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
} satisfies Meta<typeof Label>;

export default meta;

export const DefaultLabel: StoryObj<typeof Label> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Label입니다.',
      },
    },
  },
  render: args => (
    <Label htmlFor="email" {...args}>
      Your email address
    </Label>
  ),
};

export const ExampleLabel: StoryObj<typeof Label> = {
  parameters: {
    docs: {
      description: {
        story: 'Checkbox와 함께 사용된 Example Label입니다.',
      },
    },
  },
  render: args => (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" {...args}>
          Accept terms and conditions
        </Label>
      </div>
    </div>
  ),
};
