import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Dialog는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정하는 등의 여러 작업을 포함하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
사용자의 결정에 대해 경고를 하거나 결과를 전달하는 데 사용하며 사용자가 액션을 취하기 전까지 화면에 남아 있습니다.\n 
본문 또는 버튼에 대한 편집이 필요할 시 OS system alert과 구분하여 사용해야 합니다\n
- modal 값으로 true | false 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    modal: {
      description: 'Dialog의 modal 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
} satisfies Meta<typeof Dialog>;

export default meta;

export const DefaultDialog: StoryObj<typeof Dialog> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Dialog입니다.',
      },
    },
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
};

export const ExampleDialog: StoryObj<typeof Dialog> = {
  parameters: {
    docs: {
      description: {
        story: 'Button, Label&Input과 함께 사용한 Example Dialog입니다.',
      },
    },
  },
  render: args => (
    <Dialog {...args}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
