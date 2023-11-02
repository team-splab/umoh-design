import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Tooltip는 해당 요소가 키보드 포커스를 받거나 해당 요소 위로 마우스를 가져가면 해당 요소와 관련된 정보를 표시하는 팝업 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- defaultOpen 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- open 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- delayDuration 값으로 number를 입력할 수 있습니다.
- disableHoverableContent 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    defaultOpen: {
      description: 'Tooltip의 defaultOpen 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    open: {
      description: 'Tooltip의 open 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
    },
    delayDuration: {
      description: 'Tooltip이 열리는데 걸리는 시간을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '700' },
      },
      control: {
        type: 'number',
      },
    },
    disableHoverableContent: {
      description: 'Tooltip의 disableHoverableContent 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
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
} satisfies Meta<typeof Tooltip>;

export default meta;

export const DefaultTooltip: StoryObj<typeof Tooltip> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Tooltip입니다.',
      },
    },
  },
  render: args => (
    <TooltipProvider>
      <Tooltip {...args}>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
