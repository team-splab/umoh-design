import type { Meta, StoryObj } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Label } from 'components/Label/Label';

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
      'Popover는 사용자가 버튼을 통해 선택할 수 있는 옵션 목록을 표시하는 컴포넌트입니다.',
    docs: {
      description: {
        component: '• modal 값으로 true | false 중 하나를 선택할 수 있습니다.',
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
