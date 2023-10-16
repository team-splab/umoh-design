import type { Meta, StoryObj } from '@storybook/react';

import {
  Chat,
  ChatContainer,
  ChatTrigger,
  ChatPreview,
  ChatContent,
} from './Chat';

import { ChatCard, ChatCardHeader, ChatCardContent } from './ChatCard';
import ChatTextField from './ChatTextField';

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
      'Chat은 AccordionPrimitive를 사용하여 구현된 커스텀 컴포넌트입니다.',
    docs: {
      description: {
        component: `
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
    <Chat className="fixed bottom-0 right-0 w-full max-w-[344px]" {...args}>
      <ChatContainer value="chat">
        <ChatTrigger />
        <ChatPreview>
          안녕하세요 여러분🚀 운영팀입니다, 곧 이벤트가 시작될 예정입니다. 다들
          오시는 길 이실텐데, 도착하시면 “B1” 입구로 입장 부탁드립니다. 앞에 ...
        </ChatPreview>
        <ChatContent>
          {cardData.map(item => (
            <ChatCard id={item.id} key={item.id}>
              <ChatCardHeader
                host={item.host}
                profile_img={item.profile_img}
                name={item.name}
                date={item.date}
              />
              <ChatCardContent content={item.content} reply={item.reply} />
            </ChatCard>
          ))}
        </ChatContent>
      </ChatContainer>
    </Chat>
  ),
};

export const DefaultChatCard: StoryObj<typeof ChatCard> = {
  decorators: [
    Story => (
      <div className="m-12 w-[400px]">
        <Story />
      </div>
    ),
  ],
  render: args => {
    return (
      <>
        {cardData.map(item => (
          <ChatCard id={item.id} key={item.id} {...args}>
            <ChatCardHeader
              host={item.host}
              profile_img={item.profile_img}
              name={item.name}
              date={item.date}
            />
            <ChatCardContent content={item.content} reply={item.reply} />
          </ChatCard>
        ))}
      </>
    );
  },
};

export const DefaultChatTextField: StoryObj<typeof ChatTextField> = {
  decorators: [
    Story => (
      <div className="m-12 w-[400px]">
        <Story />
      </div>
    ),
  ],

  render: args => {
    return <ChatTextField />;
  },
};

const cardData = [
  {
    id: '1',
    host: true,
    profile_img: 'https://ui-avatars.com/api/?name=Host.png',
    name: 'Host',
    date: new Date().toDateString(),
    content: 'First Host ChatCard Content',
    reply: [
      {
        id: '2',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'Second Host ChatCard Content',
        reply: [
          {
            id: '7',
            host: false,
            profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
            name: 'Guest',
            date: new Date().toDateString(),
            content: 'Second Guest ChatCard Content',
            reply: [],
          },
        ],
      },
      {
        id: '3',
        host: false,
        profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
        name: 'Guest2',
        date: new Date().toDateString(),
        content: 'Third Guest ChatCard Content',
        reply: [],
      },
    ],
  },
  {
    id: '4',
    host: false,
    profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
    name: 'Guest',
    date: new Date().toDateString(),
    content: 'ChatCard Content',
    reply: [
      {
        id: '5',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'ChatCard Content',
        reply: [],
      },
    ],
  },
  {
    id: '6',
    host: false,
    profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
    name: 'Guest4',
    date: new Date().toDateString(),
    content: 'ChatCard Content',
    reply: [],
  },
  {
    id: '8',
    host: true,
    profile_img: 'https://ui-avatars.com/api/?name=Host.png',
    name: 'Host',
    date: new Date().toDateString(),
    content: 'Fourth Host ChatCard Content',
    reply: [
      {
        id: '9',
        host: false,
        profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
        name: 'Guest5',
        date: new Date().toDateString(),
        content: 'Fourth Guest ChatCard Content',
        reply: [],
      },
    ],
  },
  {
    id: '10',
    host: false,
    profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
    name: 'Guest6',
    date: new Date().toDateString(),
    content: 'Fifth Guest ChatCard Content',
    reply: [
      {
        id: '11',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'Fifth Host ChatCard Content',
        reply: [],
      },
    ],
  },
  {
    id: '12',
    host: true,
    profile_img: 'https://ui-avatars.com/api/?name=Host.png',
    name: 'Host',
    date: new Date().toDateString(),
    content: 'Sixth Host ChatCard Content',
    reply: [],
  },
  {
    id: '13',
    host: false,
    profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
    name: 'Guest7',
    date: new Date().toDateString(),
    content: 'Sixth Guest ChatCard Content',
    reply: [],
  },
];
