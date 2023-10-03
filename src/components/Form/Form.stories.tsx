'use client';

import type { Meta, StoryObj } from '@storybook/react';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Form는 사용자의 입력을 검증하고 제출할 수 있는 컴포넌트입니다.',
    docs: {
      description: {
        component: 'react-hook-form과 zod 라이브러리를 사용합니다.',
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
} satisfies Meta<typeof Form>;

export default meta;

export const DefaultForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Form입니다.',
      },
    },
  },
  render: args => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: '',
      },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      // TODO: Add Toast Message
    }

    return (
      <Form {...form} {...args}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
