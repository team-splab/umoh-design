import React from 'react';
import { Button, Toast, ToastAction, Toaster } from 'components';
import { useToast } from 'lib/useToast';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Toast는 일시적으로 표시되는 간결한 메시지 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- variant값으로 "default" | "destructive" 중 하나를 선택할 수 있습니다.\n
- type값으로 "foreground" | "background" 중 하나를 선택할 수 있습니다.\n
- duration값으로 number를 입력할 수 있습니다.\n
- asChild값으로 true | false 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  args: {
    variant: 'default',
    type: 'foreground',
  },
  argTypes: {
    variant: {
      description: 'Toast의 Variant를 설정합니다.',
      table: {
        type: { summary: 'ToastVariant' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'destructive'],
      control: {
        type: 'radio',
      },
    },
    type: {
      description: 'Toast의 Type을 설정합니다.',
      table: {
        type: { summary: 'ToastType' },
        defaultValue: { summary: 'foreground' },
      },
      options: ['foreground', 'background'],
      control: {
        type: 'radio',
      },
    },
    duration: {
      description: 'Toast가 표시되는 시간을 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
      control: {
        type: 'number',
      },
    },
    asChild: {
      description: 'Toast의 asChild 여부를 설정합니다.',
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
        {/* Add the Toaster component */}
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Toast>;

export default meta;

export const DefaultToast: StoryObj<typeof Toast> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Toast입니다.',
      },
    },
  },
  render: args => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            description: 'Your message has been sent.',
            ...args,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithTitleToast: StoryObj<typeof Toast> = {
  parameters: {
    docs: {
      description: {
        story: 'Title이 포함된 Toast입니다.',
      },
    },
  },
  render: args => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            ...args,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const WithActionToast: StoryObj<typeof Toast> = {
  parameters: {
    docs: {
      description: {
        story: 'Action이 포함된 Toast입니다.',
      },
    },
  },
  render: args => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            action: <ToastAction altText="Try again">Try again</ToastAction>,
            ...args,
          });
        }}
      >
        Show Toast
      </Button>
    );
  },
};

export const ExampleToast: StoryObj<typeof Toast> = {
  parameters: {
    docs: {
      description: {
        story: '캘린더에 일정을 추가하는 Example Toast입니다',
      },
    },
  },
  render: args => {
    const { toast } = useToast();

    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up ',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
            ...args,
          });
        }}
      >
        Add to calendar
      </Button>
    );
  },
};
