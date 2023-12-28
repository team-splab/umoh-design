import React from 'react';
import { Button, Sonner } from 'components';
import { toast } from 'sonner';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Sonner',
  component: Sonner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Sonner 키보드를 통해 접근 가능한 크기 조정 가능한 패널 그룹 및 레이아웃 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- Docs : https://sonner.emilkowal.ski
`,
      },
    },
  },
  decorators: [
    Story => (
      <div className="p-12">
        <Story />
        <Sonner />
      </div>
    ),
  ],
} satisfies Meta<typeof Sonner>;

export default meta;

export const DefaultSonner: StoryObj<typeof Sonner> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Sonner.',
      },
    },
  },
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }
    >
      Show Toast
    </Button>
  ),
};
