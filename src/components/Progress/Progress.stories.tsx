import type { Meta, StoryObj } from '@storybook/react';

import { useEffect, useState } from 'react';

import { Progress } from './Progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Progress는 작업 완료 진행률을 보여주는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- value 값으로 number를 입력할 수 있습니다.
- max 값으로 number를 입력할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Progress의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    value: {
      description: 'Progress의 진행도를 설정합니다.',
      table: {
        type: { summary: 'number | null' },
      },
      control: {
        type: 'number',
      },
    },
    max: {
      description: 'Progress의 최대값을 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
      control: {
        type: 'number',
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
} satisfies Meta<typeof Progress>;

export default meta;

export const DefaultProgress: StoryObj<typeof Progress> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Progress입니다.',
      },
    },
  },
  render: args => <Progress value={33} {...args} />,
};

export const ExampleProgress: StoryObj<typeof Progress> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 Example Progress입니다.',
      },
    },
  },
  render: args => {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(100), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} {...args} />;
  },
};
