import type { Meta, StoryObj } from '@storybook/react';

import {
  Post,
  PostContainer,
  PostTrigger,
  PostPreview,
  PostContent,
} from './Post';

import { PostCard, PostCardHeader, PostCardContent } from './PostCard';
import PostTextField from './PostTextField';

const meta = {
  title: 'CustomComponent/Post',
  component: Post,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Post은 PostPrimitive를 사용하여 구현된 커스텀 컴포넌트입니다.',
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
      description: 'Post의 Type을 설정합니다.',
      table: {
        type: { summary: 'PostType' },
        defaultValue: { summary: 'single' },
      },
      options: ['single', 'multiple'],
      control: {
        type: 'radio',
      },
      required: true,
    },
    collapsible: {
      description: 'Post의 Collapsible 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'Post의 disabled 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    dir: {
      description: 'Post의 방향을 설정합니다.',
      table: {
        type: { summary: 'PostDir' },
        defaultValue: { summary: 'ltr' },
      },
      options: ['ltr', 'rtl'],
      control: {
        type: 'radio',
      },
    },
    orientation: {
      description: 'Post의 방향을 설정합니다.',
      table: {
        type: { summary: 'PostOrientation' },
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
} satisfies Meta<typeof Post>;

export default meta;

export const DefaultPost: StoryObj<typeof Post> = {
  render: args => (
    <Post className="fixed bottom-0 right-0 w-full max-w-[344px]" {...args}>
      <PostContainer value="post">
        <PostTrigger />
        <PostPreview>
          안녕하세요 여러분🚀 운영팀입니다, 곧 이벤트가 시작될 예정입니다. 다들
          오시는 길 이실텐데, 도착하시면 “B1” 입구로 입장 부탁드립니다. 앞에 ...
        </PostPreview>
        <PostContent>
          {cardData.map(item => (
            <PostCard id={item.id} key={item.id}>
              <PostCardHeader
                host={item.host}
                profile_img={item.profile_img}
                name={item.name}
                date={item.date}
              />
              <PostCardContent content={item.content} reply={item.reply} />
            </PostCard>
          ))}
        </PostContent>
      </PostContainer>
    </Post>
  ),
};

export const DefaultPostCard: StoryObj<typeof PostCard> = {
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
          <PostCard id={item.id} key={item.id} {...args}>
            <PostCardHeader
              host={item.host}
              profile_img={item.profile_img}
              name={item.name}
              date={item.date}
            />
            <PostCardContent content={item.content} reply={item.reply} />
          </PostCard>
        ))}
      </>
    );
  },
};

export const DefaultPostTextField: StoryObj<typeof PostTextField> = {
  decorators: [
    Story => (
      <div className="m-12 w-[400px]">
        <Story />
      </div>
    ),
  ],

  render: args => {
    return <PostTextField />;
  },
};

const cardData = [
  {
    id: '1',
    host: true,
    profile_img: 'https://ui-avatars.com/api/?name=Host.png',
    name: 'Host',
    date: new Date().toDateString(),
    content: 'First Host PostCard Content',
    reply: [
      {
        id: '2',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'Second Host PostCard Content',
        reply: [
          {
            id: '7',
            host: false,
            profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
            name: 'Guest',
            date: new Date().toDateString(),
            content: 'Second Guest PostCard Content',
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
        content: 'Third Guest PostCard Content',
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
    content: 'PostCard Content',
    reply: [
      {
        id: '5',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'PostCard Content',
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
    content: 'PostCard Content',
    reply: [],
  },
  {
    id: '8',
    host: true,
    profile_img: 'https://ui-avatars.com/api/?name=Host.png',
    name: 'Host',
    date: new Date().toDateString(),
    content: 'Fourth Host PostCard Content',
    reply: [
      {
        id: '9',
        host: false,
        profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
        name: 'Guest5',
        date: new Date().toDateString(),
        content: 'Fourth Guest PostCard Content',
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
    content: 'Fifth Guest PostCard Content',
    reply: [
      {
        id: '11',
        host: true,
        profile_img: 'https://ui-avatars.com/api/?name=Host.png',
        name: 'Host',
        date: new Date().toDateString(),
        content: 'Fifth Host PostCard Content',
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
    content: 'Sixth Host PostCard Content',
    reply: [],
  },
  {
    id: '13',
    host: false,
    profile_img: 'https://ui-avatars.com/api/?name=Guest.png',
    name: 'Guest7',
    date: new Date().toDateString(),
    content: 'Sixth Guest PostCard Content',
    reply: [],
  },
];
