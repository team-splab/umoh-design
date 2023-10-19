import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  Board,
  BoardPreview,
  BoardContainer,
  BoardContent,
  PostCard,
  PostCardHeader,
  PostCardContent,
  PostTextField,
  PreviewCard,
  ReplyHeader,
  BoardHeader,
} from '.';

const meta = {
  title: 'CustomComponent/Board',
  component: Board,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Board은 PostPrimitive를 사용하여 구현된 커스텀 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
  },
  args: {
    type: 'single',
    collapsible: true,
  },
  argTypes: {
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
  },
  decorators: [
    Story => (
      <div className="h-screen w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Board>;

export default meta;

export const DefaultPost: StoryObj<typeof Board> = {
  render: args => {
    const [replyOpen, setReplyOpen] = useState(false);

    const MockPreviewData = MockPreviewResponse.result;
    const MockPostData = MockPostResponse.result.posts;
    const MockReplyPostData = MockReplyResponse.result.post;
    const MockReplyData = MockReplyResponse.result.replies;

    const handleReplyClick = () => {
      setReplyOpen(true);
    };

    const handleBackClick = () => {
      setReplyOpen(false);
    };

    const handleRefreshClick = () => {
      console.log('refresh click');
    };

    return (
      <Board className="fixed bottom-0 right-0" {...args}>
        <BoardContainer value="post">
          <BoardHeader onRefreshClick={handleRefreshClick} />
          <BoardPreview>
            <PreviewCard
              host={MockPreviewData.host}
              name={MockPreviewData.name}
              content={MockPreviewData.content}
            />
          </BoardPreview>
          <BoardContent>
            {replyOpen ? (
              <>
                <ReplyHeader onBackClick={handleBackClick} />
                {
                  <PostCard
                    id={MockReplyPostData.id}
                    key={MockReplyPostData.id}
                    host={MockReplyPostData.host}
                    className={'border bg-slate-200 hover:bg-slate-200'}
                  >
                    <PostCardHeader
                      host={MockReplyPostData.host}
                      profileImg={MockReplyPostData.profileImg}
                      name={MockReplyPostData.name}
                      createdAt={new Date(
                        MockReplyPostData.createdAt
                      ).toLocaleString()}
                    />
                    <PostCardContent
                      content={MockReplyPostData.content}
                      replyCount={MockReplyPostData.replyCount}
                    />
                  </PostCard>
                }
                {MockReplyData.map((item, index) => (
                  <PostCard id={item.id} key={item.id} host={item.host}>
                    <PostCardHeader
                      host={item.host}
                      profileImg={item.profileImg}
                      name={item.name}
                      createdAt={new Date(item.createdAt).toLocaleString()}
                    />
                    <PostCardContent content={item.content} />
                  </PostCard>
                ))}
              </>
            ) : (
              MockPostData.map(item => (
                <PostCard id={item.id} key={item.id} host={item.host}>
                  <PostCardHeader
                    host={item.host}
                    profileImg={item.profileImg}
                    name={item.name}
                    createdAt={new Date(item.createdAt).toLocaleString()}
                  />
                  <PostCardContent
                    content={item.content}
                    replyCount={item.replyCount}
                    onReplyClick={handleReplyClick}
                  />
                </PostCard>
              ))
            )}
          </BoardContent>
        </BoardContainer>
      </Board>
    );
  },
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
    const MockPostData = MockPostResponse.result.posts;

    const handleReplyClick = () => {
      console.log('reply click');
    };

    return (
      <>
        {MockPostData.map(item => (
          <PostCard id={item.id} key={item.id} {...args}>
            <PostCardHeader
              host={item.host}
              profileImg={item.profileImg}
              name={item.name}
              createdAt={item.createdAt}
            />
            <PostCardContent
              content={item.content}
              replyCount={item.replyCount}
              onReplyClick={handleReplyClick}
            />
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

// /v2/space/{handle}/board/preview
const MockPreviewResponse = {
  status: 200,
  message: '',
  result: {
    id: '1',
    host: true,
    spaceProfileId: '1',
    profileImg: 'https://ui-avatars.com/api/?name=Host.png' || null,
    name: 'Host',
    createdAt: new Date().toISOString(), // ISO표준
    updatedAt: new Date().toISOString(), // ISO표준
    content:
      '공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다.공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다공지입니다',
    replyCount: 5,
  },
};

// /v2/space/{handle}/board/post?last_id=1234&max=100
const MockPostResponse = {
  status: 200,
  message: '',
  result: {
    posts: [
      {
        id: '1',
        host: true,
        spaceProfileId: '1',
        profileImg:
          'https://storage.sendtime.app/space/2023-09-26T02:16:23.391350Zd6f2a820-6312-422c-a70b-d67ed9ef51e0-taekang.jpg',
        name: 'Kang',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '공지입니다.',
        replyCount: 5,
      },
      {
        id: '2',
        host: false,
        spaceProfileId: '2',
        profileImg:
          'https://storage.sendtime.app/space/2023-08-11T07:26:39.783401Z69526a6a-77b1-44c4-a585-65fe72a6e82d-%EB%AF%BC%EC%8A%B9%ED%98%84-%EC%A0%95%EB%B0%A9%ED%98%95(%EC%8B%9C%ED%98%84%ED%95%98%EB%8B%A4).jpg',
        name: 'Leo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '3',
        host: false,
        spaceProfileId: '3',
        profileImg:
          'https://storage.sendtime.app/space/2023-08-25T13:10:00.287554Zeaa746bd-1a4c-4121-8ff0-dc3ca4da6d93-IMG_2798.jpg',
        name: 'Zin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '4',
        host: true,
        spaceProfileId: '4',
        profileImg:
          'https://storage.sendtime.app/space/2023-08-24T05:50:25.568248Z2f7267fd-ce1f-4dff-abc7-35f3be4b8ef5-Min.png',
        name: 'Min',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '5',
        host: true,
        spaceProfileId: '5',
        profileImg:
          'https://storage.sendtime.app/space/2023-08-11T06:46:27.546074Zcfe0e2c6-745c-4c9c-b499-3f664186cedc-KakaoTalk_20230616_095206278.jpg',
        name: 'Changhee',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '6',
        host: false,
        spaceProfileId: '6',
        profileImg:
          'https://storage.sendtime.app/space/2023-10-05T01:13:44.421301Z9b0cf6d6-a36e-4921-b2eb-3a7b764cacf2-IMG_1227.jpg',
        name: 'Sangmin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '7',
        host: false,
        spaceProfileId: '7',
        profileImg:
          'https://storage.sendtime.app/space/2023-09-26T02:06:07.170158Z6215cf2e-dfee-4a75-bcd4-2e8adefe66d5-%EC%9A%B0%EB%AA%A8-%ED%94%84%EB%A1%9C%ED%95%84-%EC%B9%B4%EB%93%9C-%EC%82%AC%EC%A7%84.jpg',
        name: 'Jihoon',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '8',
        host: false,
        spaceProfileId: '8',
        profileImg:
          'https://storage.sendtime.app/space/2023-08-28T11:17:58.513542Z239c6f18-6a1f-4c4e-a6a7-01567061330a-%ED%99%8D%EC%86%94%EC%9D%981.jpg',
        name: 'Soleui',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '9',
        host: false,
        spaceProfileId: '9',
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '10',
        host: false,
        spaceProfileId: '10',
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
        replyCount: 0,
      },
    ],
  },
};

const MockReplyResponse = {
  status: 200,
  message: '',
  result: {
    post: {
      id: '1',
      host: true,
      spaceProfileId: '1',
      profileImg:
        'https://storage.sendtime.app/space/2023-09-26T02:16:23.391350Zd6f2a820-6312-422c-a70b-d67ed9ef51e0-taekang.jpg',
      name: 'Kang',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      content: '공지입니다.',
      replyCount: 5,
    },
    replies: [
      {
        id: '2',
        host: false,
        spaceProfileId: '2',
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
      {
        id: '2',
        host: false,
        spaceProfileId: '2',
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
      {
        id: '2',
        host: false,
        spaceProfileId: '2',
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
    ],
  },
};
