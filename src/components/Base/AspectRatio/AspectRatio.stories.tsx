import type { Meta, StoryObj } from '@storybook/react';

import Image from 'next/image';

import { AspectRatio } from './AspectRatio';

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'AspectRatio는 원하는 비율로 콘텐츠를 표시하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild값으로 true | false 중 하나를 선택할 수 있습니다.\n
- ratio값으로 숫자를 입력할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'AspectRatio asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    ratio: {
      description: 'AspectRatio의 비율을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
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
} satisfies Meta<typeof AspectRatio>;

export default meta;

export const ExampleAspectRatio: StoryObj<typeof AspectRatio> = {
  render: args => (
    <AspectRatio {...args}>
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
