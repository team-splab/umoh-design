import React, { useState } from 'react';
import {
  Board,
  BoardContainer,
  BoardContent,
  BoardHeader,
  BoardPostButton,
  BoardPreview,
  BoardSendContainer,
  BoardSkeleton,
  BoardTextField,
  Form,
  FormControl,
  FormField,
  FormItem,
  PostCard,
  PostCardContent,
  PostCardHeader,
  PostCardHeaderProps,
  PreviewCard,
  ReplyHeader,
  ReplySeparator,
} from 'components';
import { Edit3Icon, Trash2Icon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';

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
      'Board은 AccordionPrimitive를 사용하여 구현된 커스텀 컴포넌트입니다.',
    docs: {
      description: {
        component: `
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
`,
      },
    },
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

export const DefaultBoard: StoryObj<typeof Board> = {
  render: () => {
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

    const handleSend = (data: z.infer<typeof FormSchema>) => {
      console.log(data);
    };

    const FormSchema = z.object({
      content: z.string().min(1),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    return (
      <Board className="fixed bottom-0 right-0" collapsible type="single">
        <BoardContainer value="post">
          <BoardHeader
            onRefreshClick={handleRefreshClick}
            headerTitle="Community Forum"
          />
          <BoardPreview>
            <PreviewCard
              isHost={MockPreviewData.isHost}
              name={MockPreviewData.name}
              content={MockPreviewData.content}
            />
          </BoardPreview>
          <BoardContent>
            {replyOpen ? (
              <div className="flex h-full w-full flex-col overflow-auto">
                <ReplyHeader onBackClick={handleBackClick} label="Back" />
                <PostCard
                  id={MockReplyPostData.id}
                  key={MockReplyPostData.id}
                  isHost={MockReplyPostData.isHost}
                  isDeleted={MockReplyPostData.deleted}
                  className={`${
                    MockReplyPostData.isHost
                      ? 'bg-amber-200/50 hover:bg-amber-200/50'
                      : 'bg-slate-200 hover:bg-slate-200'
                  }`}
                >
                  <PostCardHeader
                    isHost={MockReplyPostData.isHost}
                    isDeleted={MockReplyPostData.deleted}
                    profileImg={MockReplyPostData.profileImg}
                    name={MockReplyPostData.name}
                    createdAt={new Date(
                      MockReplyPostData.createdAt
                    ).toLocaleString()}
                    fullTime={new Date(
                      MockReplyPostData.createdAt
                    ).toLocaleString()}
                    menuItems={MockPostMenuItems}
                  />
                  <PostCardContent
                    isHost={MockReplyPostData.isHost}
                    isDeleted={MockReplyPostData.deleted}
                    content={
                      MockReplyPostData.deleted
                        ? 'This post has been deleted.'
                        : MockReplyPostData.content
                    }
                    replyLabel={`${MockReplyPostData.replyCount} replies`}
                    hasReplyButton={
                      !MockReplyPostData.deleted ||
                      (MockReplyPostData.deleted &&
                        MockReplyPostData.replyCount > 0)
                    }
                  />
                </PostCard>
                <ReplySeparator
                  replyLabel={`${MockReplyPostData.replyCount} replies`}
                />
                {MockReplyData.map(item => (
                  <PostCard
                    id={item.id}
                    key={item.id}
                    isHost={item.isHost}
                    isDeleted={item.deleted}
                  >
                    <PostCardHeader
                      isHost={item.isHost}
                      isDeleted={item.deleted}
                      profileImg={item.profileImg}
                      name={item.name}
                      createdAt={new Date(item.createdAt).toLocaleString()}
                      fullTime={new Date(
                        MockReplyPostData.createdAt
                      ).toLocaleString()}
                      menuItems={MockReplyMenuItems}
                    />
                    <PostCardContent
                      isHost={item.isHost}
                      isDeleted={item.deleted}
                      content={
                        item.deleted
                          ? 'This post has been deleted.'
                          : item.content
                      }
                      hasReplyButton={false}
                    />
                  </PostCard>
                ))}
              </div>
            ) : (
              <div className="h-full w-full overflow-auto">
                {MockPostData.map(item => (
                  <PostCard
                    id={item.id}
                    key={item.id}
                    isHost={item.isHost}
                    isDeleted={item.deleted}
                  >
                    <PostCardHeader
                      isHost={item.isHost}
                      isDeleted={item.deleted}
                      profileImg={item.profileImg}
                      name={item.name}
                      createdAt={new Date(item.createdAt).toLocaleString()}
                      fullTime={new Date(
                        MockReplyPostData.createdAt
                      ).toLocaleString()}
                      menuItems={MockPostMenuItems}
                    />
                    <PostCardContent
                      isHost={item.isHost}
                      isDeleted={item.deleted}
                      content={
                        item.deleted
                          ? 'This post has been deleted.'
                          : item.content
                      }
                      replyLabel={`${item.replyCount} replies`}
                      onReplyClick={handleReplyClick}
                      hasReplyButton={
                        !item.deleted || (item.deleted && item.replyCount > 0)
                      }
                    />
                  </PostCard>
                ))}
              </div>
            )}
          </BoardContent>
          <BoardSendContainer>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSend)}
                className="flex w-full items-center"
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <div className="px-2 py-4">
                          <BoardTextField
                            className="rounded-md bg-slate-300"
                            onSubmit={form.handleSubmit(handleSend)}
                            placeholder="Post your comment"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <BoardPostButton>
                  {replyOpen ? 'Reply' : 'Post'}
                </BoardPostButton>
              </form>
            </Form>
          </BoardSendContainer>
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
              isHost={item.isHost}
              isDeleted={item.deleted}
              profileImg={item.profileImg}
              name={item.name}
              createdAt={item.createdAt}
              fullTime={new Date(item.createdAt).toLocaleString()}
            />
            <PostCardContent
              isHost={item.isHost}
              isDeleted={item.deleted}
              content={item.content}
              replyLabel={`${item.replyCount} replies`}
              onReplyClick={handleReplyClick}
              hasReplyButton={item.replyCount > 0}
            />
          </PostCard>
        ))}
      </>
    );
  },
};

export const DefaultBoardTextField: StoryObj<typeof BoardTextField> = {
  decorators: [
    Story => (
      <div className="m-12 w-[400px]">
        <Story />
      </div>
    ),
  ],

  render: args => {
    return <BoardTextField {...args} />;
  },
};

export const DefaultBoardSkeleton: StoryObj<typeof BoardSkeleton> = {
  decorators: [
    Story => (
      <div className="m-12 w-[400px]">
        <Story />
      </div>
    ),
  ],

  render: args => {
    return <BoardSkeleton {...args} />;
  },
};

export const ExampleBoardSkeleton: StoryObj<typeof BoardSkeleton> = {
  render: () => {
    const MockPreviewData = MockPreviewResponse.result;

    const handleRefreshClick = () => {
      console.log('refresh click');
    };

    const handleSend = (data: z.infer<typeof FormSchema>) => {
      console.log(data);
    };

    const FormSchema = z.object({
      content: z.string().min(1),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
    });

    return (
      <Board className="fixed bottom-0 right-0" collapsible type="single">
        <BoardContainer value="post">
          <BoardHeader
            onRefreshClick={handleRefreshClick}
            headerTitle="Community Forum"
          />
          <BoardPreview>
            <PreviewCard
              isHost={MockPreviewData.isHost}
              name={MockPreviewData.name}
              content={MockPreviewData.content}
            />
          </BoardPreview>
          <BoardContent>
            <BoardSkeleton />
            <BoardSkeleton />
            <BoardSkeleton />
            <BoardSkeleton />
          </BoardContent>
          <BoardSendContainer>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSend)}
                className="flex w-full items-center"
              >
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="flex-grow">
                      <FormControl>
                        <BoardTextField
                          onSubmit={form.handleSubmit(handleSend)}
                          placeholder="Post your comment"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <BoardPostButton>Reply</BoardPostButton>
              </form>
            </Form>
          </BoardSendContainer>
        </BoardContainer>
      </Board>
    );
  },
};

const MockPostMenuItems: PostCardHeaderProps['menuItems'] = [
  {
    id: '1',
    icon: <Trash2Icon />,
    text: 'Delete',
    onClick: () => {
      console.log('Delete');
    },
    dialog: true,
    dialogTitle: 'Delete Post',
    dialogDescription: 'Are you sure you want to delete this post?',
    dialogConfirmText: 'Delete',
    dialogConfirmVariant: 'destructive',
    dialogCancelText: 'Cancel',
  },
  ...(false
    ? [
        {
          id: '2',
          icon: <Edit3Icon />,
          text: 'Edit',
          onClick: () => {
            console.log('Edit');
          },
          dialogTitle: 'Edit Post',
          dialogDescription: 'Are you sure you want to edit this post?',
          dialogConfirmText: 'Edit',
          dialogCancelText: 'Cancel',
        },
      ]
    : []),
];

const MockReplyMenuItems: PostCardHeaderProps['menuItems'] = [
  {
    id: '1',
    icon: <Trash2Icon />,
    text: 'Delete',
    onClick: () => {
      console.log('Delete');
    },
    dialogTitle: 'Delete Reply',
    dialogDescription: 'Are you sure you want to delete this reply?',
    dialogConfirmText: 'Delete',
    dialogCancelText: 'Cancel',
  },
  ...(false
    ? [
        {
          id: '2',
          icon: <Edit3Icon />,
          text: 'Edit',
          onClick: () => {
            console.log('Edit');
          },
          dialogTitle: 'Edit Reply',
          dialogDescription: 'Are you sure you want to edit this reply?',
          dialogConfirmText: 'Edit',
          dialogCancelText: 'Cancel',
        },
      ]
    : []),
];

// /v2/space/{handle}/board/preview
const MockPreviewResponse = {
  status: 200,
  message: '',
  result: {
    id: '1',
    isHost: true,
    spaceProfileId: '1',
    deleted: false,
    profileImg: 'https://ui-avatars.com/api/?name=isHost.png',
    name: 'Min',
    createdAt: new Date().toISOString(), // ISO표준
    updatedAt: new Date().toISOString(), // ISO표준
    content:
      '안녕하세요 여러분🚀 운영팀입니다, 곧 이벤트가 시작될 예정입니다. 다들 오시는 길 이실텐데, 도착하시면 “B1” 입구로 입장 부탁드립니다. 앞에있는 데스크에서',
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
        isHost: true,
        spaceProfileId: '1',
        deleted: false,
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
        isHost: false,
        spaceProfileId: '2',
        deleted: true,
        profileImg:
          'https://storage.sendtime.app/space/2023-08-11T07:26:39.783401Z69526a6a-77b1-44c4-a585-65fe72a6e82d-%EB%AF%BC%EC%8A%B9%ED%98%84-%EC%A0%95%EB%B0%A9%ED%98%95(%EC%8B%9C%ED%98%84%ED%95%98%EB%8B%A4).jpg',
        name: 'Leo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: '새로운 글입니다.',
        replyCount: 1,
      },
      {
        id: '3',
        isHost: false,
        spaceProfileId: '3',
        deleted: false,
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
        isHost: true,
        spaceProfileId: '4',
        deleted: true,
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
        isHost: true,
        spaceProfileId: '5',
        deleted: false,
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
        isHost: false,
        spaceProfileId: '6',
        deleted: false,
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
        isHost: false,
        spaceProfileId: '7',
        deleted: false,
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
        isHost: false,
        spaceProfileId: '8',
        deleted: false,
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
        isHost: false,
        spaceProfileId: '9',
        deleted: false,
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
        replyCount: 0,
      },
      {
        id: '10',
        isHost: false,
        spaceProfileId: '10',
        deleted: false,
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
      isHost: true,
      spaceProfileId: '1',
      deleted: false,
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
        isHost: false,
        spaceProfileId: '2',
        deleted: false,
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
      {
        id: '2',
        isHost: false,
        spaceProfileId: '2',
        deleted: false,
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
      {
        id: '2',
        isHost: false,
        spaceProfileId: '2',
        deleted: false,
        profileImg: null,
        name: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        content: 'profileImg가 없는 경우 새로운 글입니다.',
      },
    ],
  },
};
