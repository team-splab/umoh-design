import React from 'react';
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Popover는 부가 정보가 필요한 요소에 사용자 액션 시 노출되는 요소로 사용하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
포커스한 것에 관한 정보 제공 요소인 Tooltip과 구분해 사용합니다.\n
Info에 대한 단순하고 빠른 정보 전달이 필요할 경우 Popover를 사용하되 변동성있는 서술적 정보에 관해서는 Sheets를 활용합니다.\n
- modal 값으로 true | false 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    modal: {
      description: 'Popover의 modal 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
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
      </div>
    ),
  ],
} satisfies Meta<typeof Popover>;

export default meta;

export const DefaultPopover: StoryObj<typeof Popover> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Popover입니다.',
      },
    },
  },
  render: args => (
    <Popover {...args}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};

export const ExamplePopover: StoryObj<typeof Popover> = {
  parameters: {
    docs: {
      description: {
        story: 'Button, Label&Input과 함께 사용한 Example Popover입니다.',
      },
    },
  },
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
