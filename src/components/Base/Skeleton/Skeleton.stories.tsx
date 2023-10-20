import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Skeleton은 실제 데이터가 렌더링 되기 전에 보이게 될 화면의 윤곽을 먼저 그려주는 로딩 애니메이션 컴포넌트입니다',
    docs: {
      description: {
        component: `사용자의 이탈을 막고, ‘어떤 것들이 보여질 것이다’라고 미리 알려주는 효과를 줍니다.
`,
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
} satisfies Meta<typeof Skeleton>;

export default meta;

export const DefaultSkeleton: StoryObj<typeof Skeleton> = {
  render: args => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" {...args} />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
};
