import React from 'react';
import { Label, RadioGroup, RadioGroupItem } from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'RadioGroup는 한 번에 하나의 버튼만 선택할 수 있는 버튼 세트 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
- required값으로 true | false 중 하나를 선택할 수 있습니다.\n
- orientation 값으로 "horizontal" | "vertical" 중 하나를 선택할 수 있습니다.\n
- loop 값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'RadioGroup의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    dir: {
      description: 'RadioGroup의 dir을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      description: 'RadioGroup의 disabled 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    required: {
      description: 'RadioGroup의 required 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    orientation: {
      description: 'RadioGroup의 방향을 설정합니다.',
      table: {
        type: { summary: '"horizontal" | "vertical" | undefined' },
        defaultValue: { summary: 'undefined' },
      },
      options: ['horizontal', 'vertical', undefined],
      control: {
        type: 'radio',
      },
    },
    loop: {
      description: 'RadioGroup의 loop 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
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
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const DefaultRadioGroup: StoryObj<typeof RadioGroup> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default RadioGroup입니다.',
      },
    },
  },
  render: args => (
    <RadioGroup defaultValue="option-one" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const ExampleRadioGroup: StoryObj<typeof RadioGroup> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 Example RadioGroup 입니다.',
      },
    },
  },
  render: args => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};
