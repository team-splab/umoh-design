import type { Meta, StoryObj } from '@storybook/react';

import { Terminal } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Alert는 사용자의 주의를 끌기 위한 콜아웃을 표시하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `variant값으로 "default" | "destructive" 중 하나를 선택할 수 있습니다.`,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Alert의 Type을 설정합니다.',
      table: {
        type: { summary: 'AlertVariant' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'destructive'],
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
} satisfies Meta<typeof Alert>;

export default meta;

export const DefaultAlert: StoryObj<typeof Alert> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Alert입니다.',
      },
    },
  },
  render: args => (
    <Alert variant="default" {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const DestructiveAlert: StoryObj<typeof Alert> = {
  parameters: {
    docs: {
      description: {
        story: 'Error, Warning 등에 사용되는 Destructive Alert입니다.',
      },
    },
  },
  render: args => (
    <Alert variant="destructive" {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};
