import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './Alert';
import { Terminal } from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    variant: {
      options: ['default', 'destructive'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

export const DefaultAlert: StoryObj<typeof Alert> = {
  render: args => (
    <Alert variant="default" {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const DestructiveAlert: StoryObj<typeof Alert> = {
  render: args => (
    <Alert variant="destructive" {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};
