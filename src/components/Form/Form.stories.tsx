'use client';

import type { Meta, StoryObj } from '@storybook/react';

import Link from 'next/link';

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
import { Checkbox } from 'components/Checkbox/Checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/Select/Select';
import { Textarea } from 'components/Textarea/Textarea';

import { toast } from 'lib/useToast';
import { Toaster } from 'components/Toast/Toaster';

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
        <Toaster />
      </div>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;

export const WithCheckboxForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Checkbox와 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const items = [
      {
        id: 'recents',
        label: 'Recents',
      },
      {
        id: 'home',
        label: 'Home',
      },
      {
        id: 'applications',
        label: 'Applications',
      },
      {
        id: 'desktop',
        label: 'Desktop',
      },
      {
        id: 'downloads',
        label: 'Downloads',
      },
      {
        id: 'documents',
        label: 'Documents',
      },
    ] as const;

    const FormSchema = z.object({
      items: z.array(z.string()).refine(value => value.some(item => item), {
        message: 'You have to select at least one item.',
      }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        items: ['recents', 'home'],
      },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form} {...args}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="items"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Sidebar</FormLabel>
                  <FormDescription>
                    Select the items you want to display in the sidebar.
                  </FormDescription>
                </div>
                {items.map(item => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="items"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={checked => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        value => value !== item.id
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
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

export const WithInputForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Input과 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const FormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form} {...args}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
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

export const WithSelectForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Select와 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const FormSchema = z.object({
      email: z
        .string({
          required_error: 'Please select an email to display.',
        })
        .email(),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form} {...args}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                  <Link href="/examples/forms">email settings</Link>.
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

export const WithTextareaForm: StoryObj<typeof Form> = {
  parameters: {
    docs: {
      description: {
        story: 'Textarea와 함께 사용된 Form입니다.',
      },
    },
  },
  render: args => {
    const FormSchema = z.object({
      bio: z
        .string()
        .min(10, {
          message: 'Bio must be at least 10 characters.',
        })
        .max(160, {
          message: 'Bio must not be longer than 30 characters.',
        }),
    });
    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
      toast({
        title: 'You submitted the following values:',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  You can <span>@mention</span> other users and organizations.
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
