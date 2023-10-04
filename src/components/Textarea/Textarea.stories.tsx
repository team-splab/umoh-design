import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'components/Button/Button';
import { Textarea } from './Textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Textarea는 사용자가 UI 상 텍스트 입력 및 확인 시 활용되는 텍스트 영역 컴포넌트입니다.',
    docs: {
      description: {
        component:
          '- disabled값으로 true | false 중 하나를 선택할 수 있습니다.',
      },
    },
  },
  argTypes: {
    disabled: {
      description: 'Textarea의 disabled 여부를 설정합니다.',
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
} satisfies Meta<typeof Textarea>;

export default meta;

export const DefaultTextarea: StoryObj<typeof Textarea> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Textarea입니다.',
      },
    },
  },
  render: args => <Textarea {...args} />,
};

export const DisabledTextarea: StoryObj<typeof Textarea> = {
  parameters: {
    docs: {
      description: {
        story: '비활성화시 사용되는 Disabled Textarea입니다.',
      },
    },
  },
  render: args => <Textarea disabled {...args} />,
};

export const WithButtonTextarea: StoryObj<typeof Textarea> = {
  parameters: {
    docs: {
      description: {
        story: 'Button과 함께 사용한 Example Textarea입니다.',
      },
    },
  },
  render: args => (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." {...args} />
      <Button>Send message</Button>
    </div>
  ),
};
