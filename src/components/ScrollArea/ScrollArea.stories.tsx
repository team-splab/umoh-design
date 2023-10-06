import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from './ScrollArea';

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'ScrollArea는 사용자 정의 cross-browser styling을 위해 기본 스크롤 기능을 강화하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- asChild 값으로 true | false 중 하나를 선택할 수 있습니다.\n
- type 값으로 "auto" | "always" | "scroll" | "hover" 중 하나를 선택할 수 있습니다.\n
- scrollHideDelay 값으로 number를 입력할 수 있습니다.\n
- dir 값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  argTypes: {
    asChild: {
      description: 'ScrollArea의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    type: {
      description: 'ScrollArea의 type을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'hover' },
      },
      options: ['auto', 'always', 'scroll', 'hover'],
      control: {
        type: 'radio',
      },
    },
    scrollHideDelay: {
      description: 'ScrollArea의 scrollHideDelay을 설정합니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '600' },
      },
      control: {
        type: 'number',
      },
    },
    dir: {
      description: 'ScrollArea의 dir을 설정합니다.',
      table: {
        type: { summary: 'enum' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
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
} satisfies Meta<typeof ScrollArea>;

export default meta;

export const DefaultScrollArea: StoryObj<typeof ScrollArea> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default ScrollArea입니다.',
      },
    },
  },
  render: args => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4" {...args}>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop.
    </ScrollArea>
  ),
};

export const ExampleScrollArea: StoryObj<typeof ScrollArea> = {
  parameters: {
    docs: {
      description: {
        story: '예시로 사용되는 ExampleScrollArea 입니다.',
      },
    },
  },
  render: args => {
    const tags = Array.from({ length: 50 }).map(
      (_, i, a) => `v1.2.0-beta.${a.length - i}`
    );
    return (
      <ScrollArea className="h-72 w-48 rounded-md border" {...args}>
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map(tag => (
            <>
              <div key={tag} className="border-t border-gray-600 text-sm">
                {tag}
              </div>
            </>
          ))}
        </div>
      </ScrollArea>
    );
  },
};
