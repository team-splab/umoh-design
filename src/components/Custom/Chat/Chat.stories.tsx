import type { Meta, StoryObj } from '@storybook/react';

import {
  Chat,
  ChatContainer,
  ChatTrigger,
  ChatPreview,
  ChatContent,
} from './Chat';

const meta = {
  title: 'CustomComponent/Chat',
  component: Chat,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Accordion은 섹션의 중요한 세부 사항을 먼저 강조 표시하고 확장되면 더 많은 세부 정보를 표시하여 점진적으로 정보를 공개하는 컴포넌트입니다.',
    docs: {
      description: {
        component: `
컨텐츠 전체를 읽는 것이 중요하지 않은 경우 아코디언을 사용하여 페이지 스크롤을 줄일 수 있습니다.\n
- type값으로 "single" | "multiple" 중 하나를 선택할 수 있습니다.\n
- collapsible값으로 true | false 중 하나를 선택할 수 있습니다.\n
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
- dir값으로 "ltr" | "rtl" 중 하나를 선택할 수 있습니다.\n
- orientation값으로 "vertical" | "horizontal" 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
  argTypes: {
    type: {
      description: 'Accordion의 Type을 설정합니다.',
      table: {
        type: { summary: 'AccordionType' },
        defaultValue: { summary: 'single' },
      },
      options: ['single', 'multiple'],
      control: {
        type: 'radio',
      },
      required: true,
    },
    collapsible: {
      description: 'Accordion의 Collapsible 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Accordion의 disabled 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    dir: {
      description: 'Accordion의 방향을 설정합니다.',
      table: {
        type: { summary: 'AccordionDir' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    orientation: {
      description: 'Accordion의 방향을 설정합니다.',
      table: {
        type: { summary: 'AccordionOrientation' },
        defaultValue: { summary: 'vertical' },
      },
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
  },
  decorators: [
    Story => (
      <div className="h-screen w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Chat>;

export default meta;

export const DefaultChat: StoryObj<typeof Chat> = {
  render: args => (
    <Chat className="absolute bottom-0 right-0 w-full" {...args}>
      <ChatContainer value="chat">
        <ChatTrigger />
        <ChatPreview>
          안녕하세요 여러분🚀 운영팀입니다, 곧 이벤트가 시작될 예정입니다. 다들
          오시는 길 이실텐데, 도착하시면 “B1” 입구로 입장 부탁드립니다. 앞에 ...
        </ChatPreview>
        <ChatContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </ChatContent>
      </ChatContainer>
    </Chat>
  ),
};
