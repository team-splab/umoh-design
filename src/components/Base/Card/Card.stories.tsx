import { Button } from 'components/Base/Button/Button';
import { Input } from 'components/Base/Input/Input';

import type { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Card는 사용자에게 정보를 집약적으로 전달하기 위한 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- Card : Card를 감싸는 Container 역할을 합니다.\n
- CardHeader : Card의 CardTitle과 CardDescription을 감싸는 Container 역할을 합니다.\n
- CardTitle : Card의 Title을 작성할 수 있습니다.\n
- CardDescription : Card의 Description을 작성할 수 있습니다.\n
- CardContent : Card의 Content를 작성할 수 있습니다.\n
- CardFooter : Card의 Footer를 작성할 수 있습니다.
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
} satisfies Meta<typeof Card>;

export default meta;

export const DefaultCard: StoryObj<typeof Card> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Card입니다.',
      },
    },
  },
  render: args => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
};

export const ExampleCard: StoryObj<typeof Card> = {
  parameters: {
    docs: {
      description: {
        story: '아래와 같이 조합하여 사용할 수 있습니다.',
      },
    },
  },
  render: args => (
    <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="name" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
};
