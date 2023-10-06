import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Slider는 사용자가 주어진 범위 내에서 값을 선택하는 입력 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- disalbed 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- orientation 값으로 "horizontal" | "vertical" 중 하나를 선택할 수 있습니다.\n
- dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
- inverted 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- min 값으로 number를 입력할 수 있습니다.\n
- max 값으로 number를 입력할 수 있습니다.\n
- step 값으로 number를 입력할 수 있습니다.\n
- minStepsBetweenThumbs 값으로 number를 입력할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'Slider의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    orientation: {
      description: 'Slider의 orientation을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'horizontal' },
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    dir: {
      description: 'Slider의 dir을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    inverted: {
      description: 'Slider의 inverted 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'boolean',
      },
    },
    min: {
      description: 'Slider의 min을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'number',
      },
    },
    max: {
      description: 'Slider의 max을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
      control: {
        type: 'number',
      },
    },
    step: {
      description: 'Slider의 step을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
      control: {
        type: 'number',
      },
    },
    minStepsBetweenThumbs: {
      description: 'Slider의 minStepsBetweenThumbs을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
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
} satisfies Meta<typeof Slider>;

export default meta;

export const DefaultSlider: StoryObj<typeof Slider> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Slider입니다.',
      },
    },
  },
  render: args => <Slider defaultValue={[33]} max={100} step={1} {...args} />,
};
