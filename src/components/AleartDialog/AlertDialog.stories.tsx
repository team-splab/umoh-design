import type { Meta, StoryObj } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './AlertDialog';

const meta = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'AlertDialog는 사용자에게 작업에 대해 알리고 중요한 정보를 포함하거나 결정하는 등의 여러 작업을 포함하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
사용자의 결정에 대해 경고를 하거나 결과를 전달하는 데 사용하며 사용자가 액션을 취하기 전까지 화면에 남아 있습니다.\n 
본문 또는 버튼에 대한 편집이 필요할 시 OS system alert과 구분하여 사용해야 합니다\n.
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
} satisfies Meta<typeof AlertDialog>;

export default meta;

export const DefaultAlertDialog: StoryObj<typeof AlertDialog> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default AlertDialog입니다.',
      },
    },
  },
  render: args => (
    <AlertDialog {...args}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
