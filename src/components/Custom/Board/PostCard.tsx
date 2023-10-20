import * as React from 'react';
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
    <div ref={ref} className="flex flex-col items-start gap-1" {...props}>
      <div className="flex items-center gap-1 text-sm">
        📩 {name}
        {host ? (
          <Badge className="py-0.5 text-xs font-medium">Host</Badge>
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
        `flex flex-col gap-2  ${
          host
            ? 'bg-amber-100/50 hover:bg-amber-100/80'
            : 'bg-white hover:bg-slate-100/50'
        } px-6 py-2 `,
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
}

const PostCardHeader = React.forwardRef<HTMLDivElement, PostCardHeaderProps>(
  ({ className, host, profileImg, name, createdAt, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-4', className)}
      {...props}
    >
      <Avatar className="rounded-lg">
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
      <div className="flex flex-col items-start gap-1">
        <p className="flex items-center gap-1 text-sm font-semibold">
          {name}
          {host && <Badge variant="default">host</Badge>}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{createdAt}</p>
      </div>
    </div>
  )
);
PostCardHeader.displayName = 'PostCardHeader';

interface PostCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  replyCount?: number;
  onReplyClick?: () => void;
}

const PostCardContent = React.forwardRef<HTMLDivElement, PostCardContentProps>(
  ({ className, content, replyCount, onReplyClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2 text-sm', className)}
      {...props}
    >
      {content}
      {replyCount && onReplyClick ? (
        <Button
          variant="ghost"
          onClick={onReplyClick}
          className="inline-flex items-center justify-start gap-2 p-0 text-primary-500 hover:bg-neutral-400/40 hover:text-primary-400 hover:underline"
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
      <button onClick={onBackClick} className="flex items-center border-b p-2">
        <ChevronLeftIcon className="h-6 w-6" />
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
        {replyCount.toString().concat(' reply')}
      </Badge>
      <Separator className="my-2 bg-primary-500 pr-2" />
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
