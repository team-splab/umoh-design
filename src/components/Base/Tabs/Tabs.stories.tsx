import type { Meta, StoryObj } from '@storybook/react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'components/Base/Tabs/Tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'components/Base/Card/Card';
import { Input } from 'components/Base/Input/Input';
import { Label } from 'components/Base/Label/Label';
import { Button } from 'components/Base/Button/Button';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Tabs는 페이지 내 유사한 콘텐츠를 그룹화하여 섹션 간 이동 시 사용하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- orientation 값으로 "horizontal" | "vertical" 중 하나를 선택할 수 있습니다.\n
- dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
- activationMode 값으로 "automatic" | "manual" 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description:
        'Tabs의 asChild 값으로 true | false 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    orientation: {
      description:
        'Tabs의 orientation 값으로 "horizontal" | "vertical" 중 하나를 선택할 수 있습니다.',
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
      description:
        'Tabs의 dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    activationMode: {
      description:
        'Tabs의 activationMode 값으로 "automatic" | "manual" 중 하나를 선택할 수 있습니다.',
      table: {
        defaultValue: { summary: 'automatic' },
      },
      options: ['automatic', 'manual'],
      control: {
        type: 'radio',
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
} satisfies Meta<typeof Tabs>;

export default meta;

export const DefaultTabs: StoryObj<typeof Tabs> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Tabs입니다.',
      },
    },
  },
  render: args => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const ExampleTabs: StoryObj<typeof Tabs> = {
  parameters: {
    docs: {
      description: {
        story: 'Button, Input&Label과 함께 사용한 Example Tabs입니다.',
      },
    },
  },
  render: args => (
    <Tabs defaultValue="account" className="w-[400px]" {...args}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};
