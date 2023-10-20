import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'components/Base/Avatar/Avatar';
import { Badge } from 'components/Base/Badge/Badge';
import { Button } from 'components/Base/Button/Button';
import { Separator } from 'components/Base/Separator/Separator';
import { cn } from 'lib/twUtils';
import { ChevronLeftIcon, MessageSquareIcon } from 'lucide-react';

interface PreviewCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  host: boolean;
  name: string;
  content: string;
}

const PreviewCard = React.forwardRef<HTMLDivElement, PreviewCardProps>(
  ({ className, host, name, content, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex w-full flex-col items-start gap-1', className)}
      {...props}
    >
      <div className="flex w-full items-center gap-1">
        <span className="overflow-hidden text-ellipsis text-sm font-bold">
          {`📩 ${name}`}
        </span>
        {host ? (
          <Badge className="bg-primary-500 py-0.5 text-xs font-medium hover:bg-primary-500">
            Host
          </Badge>
        ) : null}
      </div>
      <div className="line-clamp-1 text-sm md:line-clamp-3">{content}</div>
    </div>
  )
);

PreviewCard.displayName = 'PreviewCard';

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  host: boolean;
}

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>(
  ({ className, host, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `flex flex-col gap-2 px-6 py-2 ${
          host
            ? 'bg-amber-100/50 hover:bg-amber-100/80'
            : 'bg-white hover:bg-slate-100/50'
        }`,
        className
      )}
      {...props}
    />
  )
);
PostCard.displayName = 'PostCard';

interface PostCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  host: boolean;
  profileImg: string | null;
  name: string;
  createdAt: string;
  onImgClick?: () => void;
  onNameClick?: () => void;
}

const PostCardHeader = React.forwardRef<HTMLDivElement, PostCardHeaderProps>(
  (
    {
      className,
      host,
      profileImg,
      name,
      createdAt,
      onImgClick,
      onNameClick,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-4', className)}
      {...props}
    >
      <Avatar className="rounded-lg" onClick={onImgClick}>
        <AvatarImage
          className="object-cover"
          src={
            profileImg ??
            'https://api.dicebear.com/7.x/micah/svg?seed=Boots&backgroundColor=b6e3f4,c0aede,d1d4f9'
          }
          alt="profileImg"
        />
        <AvatarFallback>profileImg</AvatarFallback>
      </Avatar>
      <div className="flex w-56 flex-col items-start gap-1">
        <p
          className="flex w-full items-center gap-1 text-sm font-semibold"
          onClick={onNameClick}
        >
          <span className="overflow-hidden text-ellipsis text-sm font-bold">
            {name}
          </span>
          {host && (
            <Badge
              variant="default"
              className="bg-primary-500 hover:bg-primary-500"
            >
              host
            </Badge>
          )}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{createdAt}</p>
      </div>
    </div>
  )
);
PostCardHeader.displayName = 'PostCardHeader';

interface PostCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  host: boolean;
  content: string;
  replyCount?: number;
  onReplyClick?: () => void;
}

const PostCardContent = React.forwardRef<HTMLDivElement, PostCardContentProps>(
  ({ className, host, content, replyCount, onReplyClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2 text-sm text-black', className)}
      {...props}
    >
      {content}
      {replyCount && onReplyClick ? (
        <Button
          variant="ghost"
          onClick={onReplyClick}
          className={`inline-flex items-center justify-start gap-2 p-0 text-primary-500 hover:text-primary-500 hover:underline ${
            host ? 'hover:bg-amber-200/50' : 'hover:bg-slate-200/50'
          }`}
        >
          <MessageSquareIcon />
          Reply ({replyCount})
        </Button>
      ) : null}
    </div>
  )
);
PostCardContent.displayName = 'PostCardContent';

interface ReplyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description 뒤로가기 버튼 클릭 시 호출되는 콜백 함수
   */
  onBackClick?: () => void;
}

const ReplyHeader = React.forwardRef<HTMLDivElement, ReplyHeaderProps>(
  ({ className, onBackClick, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      <button
        onClick={onBackClick}
        className="group flex items-center border-b p-2 hover:underline"
      >
        <ChevronLeftIcon className="h-6 w-6 duration-300 ease-out group-hover:translate-x-[-4px]" />
        Back
      </button>
    </div>
  )
);

interface ReplySeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  replyCount: number;
}

const ReplySeparator = React.forwardRef<HTMLDivElement, ReplySeparatorProps>(
  ({ className, replyCount, ...props }, ref) => (
    <div ref={ref} className={cn('flex p-2', className)} {...props}>
      <Badge className="mr-2 shrink-0 bg-primary-500 hover:bg-primary-500">
        {`${replyCount} reply`}
      </Badge>
      <Separator className="my-2 bg-primary-500" />
    </div>
  )
);

export type {
  PostCardContentProps,
  PostCardHeaderProps,
  PreviewCardProps,
  ReplyHeaderProps,
  ReplySeparatorProps,
};

export {
  PostCard,
  PostCardContent,
  PostCardHeader,
  PreviewCard,
  ReplyHeader,
  ReplySeparator,
};
