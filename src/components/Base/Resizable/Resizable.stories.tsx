import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Resizable은 키보드를 통해 접근 가능한 크기 조정 가능한 패널 그룹 및 레이아웃 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- API Reference : https://github.com/bvaughn/react-resizable-panels/tree/main/packages/react-resizable-panels
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
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;

export const DefaultResizablePanel: StoryObj<typeof ResizablePanelGroup> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default ResizablePanel입니다.',
      },
    },
  },
  render: args => (
    <ResizablePanelGroup
      {...args}
      direction="horizontal"
      className="max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
