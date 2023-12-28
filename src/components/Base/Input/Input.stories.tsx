import React from 'react';
import { Button, Input } from 'components';
import { Search } from 'lucide-react';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Input는 사용자가 UI 상 텍스트 입력 및 확인 시 활용되는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- input의 type값인 "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" 중 하나를 선택할 수 있습니다.\n
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    type: {
      description: 'Input의 Type을 설정합니다.',
      table: {
        type: { summary: 'InputTypes' },
        defaultValue: { summary: 'text' },
      },
      options: [
        'button',
        'checkbox',
        'color',
        'date',
        'datetime-local',
        'email',
        'file',
        'hidden',
        'image',
        'month',
        'number',
        'password',
        'radio',
        'range',
        'reset',
        'search',
        'submit',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'Input의 disabled 여부를 설정합니다.',
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
} satisfies Meta<typeof Input>;

export default meta;

export const DefaultInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Input입니다.',
      },
    },
  },
  render: args => <Input type="email" placeholder="Email" {...args} />,
};

export const ElementInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Input입니다.',
      },
    },
  },
  render: args => (
    <Input
      type="email"
      placeholder="Email"
      leftElement={<Search className="h-4 w-4" />}
      rightElement={<Search className="h-4 w-4" />}
      className="px-8"
      {...args}
    />
  ),
};

export const FileInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '파일 업로드 시 사용되는 File Input입니다.',
      },
    },
  },
  render: args => <Input id="picture" type="file" {...args} />,
};

export const DisabledInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: '비활성화시 사용되는 Disabled Input입니다.',
      },
    },
  },
  render: args => <Input disabled type="email" placeholder="Email" {...args} />,
};

export const WithButtonInput: StoryObj<typeof Input> = {
  parameters: {
    docs: {
      description: {
        story: 'Button과 함께 사용한 Example Input입니다.',
      },
    },
  },
  render: args => (
    <div className="flex w-full max-w-sm items-center space-x-2" {...args}>
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};
