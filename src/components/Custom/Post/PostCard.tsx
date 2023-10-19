import * as React from 'react';

import { cn } from 'lib/twUtils';

import { ChevronLeftIcon, MessageSquareIcon } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'components/Base/Avatar/Avatar';
import { Badge } from 'components/Base/Badge/Badge';

interface PreviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  host: boolean;
  name: string;
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
  replyClick?: () => void;
}

const PostCardContent = React.forwardRef<HTMLDivElement, PostCardContentProps>(
  ({ className, content, replyCount, replyClick, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2 text-sm', className)}
      {...props}
    >
      {content}
      {replyCount ? (
        <button
          className="flex items-center gap-2 text-gray-600"
          onClick={replyClick}
        >
          <MessageSquareIcon />
          Reply ({replyCount})
        </button>
      ) : null}
    </div>
  )
);
PostCardContent.displayName = 'PostCardContent';

interface ReplyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  backClick?: () => void;
}

const ReplyHeader = React.forwardRef<HTMLDivElement, ReplyHeaderProps>(
  ({ className, backClick, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      <button onClick={backClick} className="flex items-center border-b p-2">
        <ChevronLeftIcon className="h-6 w-6" />
        Back
      </button>
    </div>
  )
);

export type {
  PreviewCardProps,
  PostCardHeaderProps,
  PostCardContentProps,
  ReplyHeaderProps,
};

export { PreviewCard, PostCard, PostCardHeader, PostCardContent, ReplyHeader };
