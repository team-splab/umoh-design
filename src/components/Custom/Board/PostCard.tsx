import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'components';
import { cn } from 'lib/twUtils';
import {
  ChevronLeftIcon,
  MessageSquareIcon,
  MoreVerticalIcon,
  TrashIcon,
} from 'lucide-react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

interface PreviewCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  isHost: boolean;
  name: string;
  content: string;
}

const PreviewCard = React.forwardRef<HTMLDivElement, PreviewCardProps>(
  ({ className, isHost, name, content, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex w-full flex-col items-start gap-1', className)}
      {...props}
    >
      <div className="flex w-full items-center gap-1">
        <span className="overflow-hidden text-ellipsis text-sm font-bold">
          {`📩 ${name}`}
        </span>
        {isHost ? (
          <Badge className="bg-primary-500 py-0.5 text-xs font-medium hover:bg-primary-500">
            host
          </Badge>
        ) : null}
      </div>
      <div className="line-clamp-1 text-sm board-mobile:line-clamp-3">
        {content}
      </div>
    </div>
  )
);

PreviewCard.displayName = 'PreviewCard';

interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  isHost: boolean;
  isDeleted: boolean;
}

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>(
  ({ className, isHost, isDeleted, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        `flex flex-col gap-2 px-6 py-2 ${
          !isDeleted && isHost
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

interface MenuItem {
  id: string;
  icon?: React.ReactNode;
  text: string;
  dialog?: boolean;
  dialogTitle?: string;
  dialogDescription?: string;
  dialogConfirmText?: string;
  dialogConfirmVariant?: ButtonProps['variant'];
  dialogCancelText?: string;
  dialogCancelVariant?: ButtonProps['variant'];
  separator?: boolean;
  onClick?: () => void;
  itemProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Item>;
}

interface PostCardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isHost: boolean;
  isDeleted: boolean;
  profileImg: string | null;
  name: string;
  createdAt: string;
  fullTime: string;
  onImgClick?: () => void;
  onNameClick?: () => void;
  menuItems?: MenuItem[];
  dropdownTriggerProps?: React.ComponentProps<
    typeof DropdownMenuPrimitive.Trigger
  >;
  dropdownMenuProps?: React.ComponentProps<typeof DropdownMenuPrimitive.Root>;
  dropdownContentProps?: React.ComponentProps<
    typeof DropdownMenuPrimitive.Content
  >;
  dialogProps?: React.ComponentProps<typeof Dialog>;
  dialogContentProps?: React.ComponentProps<typeof DialogContent>;
  dialogHeaderProps?: React.ComponentProps<typeof DialogHeader>;
  dialogTitleProps?: React.ComponentProps<typeof DialogTitle>;
  dialogDescriptionProps?: React.ComponentProps<typeof DialogDescription>;
  dialogFooterProps?: React.ComponentProps<typeof DialogFooter>;
  dialogConfirmProps?: React.ComponentProps<typeof Button>;
  dialogCancelProps?: React.ComponentProps<typeof Button>;
}

const PostCardHeader = React.forwardRef<HTMLDivElement, PostCardHeaderProps>(
  (
    {
      className,
      isHost,
      isDeleted,
      profileImg,
      name,
      createdAt,
      fullTime,
      onImgClick,
      onNameClick,
      menuItems,
      dropdownTriggerProps,
      dropdownMenuProps,
      dropdownContentProps,
      dialogProps,
      dialogContentProps,
      dialogHeaderProps,
      dialogTitleProps,
      dialogDescriptionProps,
      dialogFooterProps,
      dialogConfirmProps,
      dialogCancelProps,
      ...props
    },
    ref
  ) => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    if (isDeleted) return null;
    return (
      <div
        ref={ref}
        className={cn('flex items-center gap-4', className)}
        {...props}
      >
        <Avatar className="rounded-lg" onClick={onImgClick}>
          <AvatarImage
            className="object-cover"
            src={
              profileImg ||
              'https://storage.umoh.io/official/umoh_icon_purple.png'
            }
            alt="profileImg"
          />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
        <div className="flex w-full justify-between">
          <div className="flex flex-grow flex-col items-start gap-1">
            <p
              className="flex w-full items-center gap-1 text-sm font-semibold"
              onClick={onNameClick}
            >
              <span className="overflow-hidden text-ellipsis text-sm font-bold">
                {name}
              </span>
              {isHost && (
                <Badge
                  variant="default"
                  className="bg-primary-500 hover:bg-primary-500"
                >
                  host
                </Badge>
              )}
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="text-xs text-gray-500 hover:underline">
                    {createdAt}
                  </p>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{fullTime}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {menuItems?.map(() => (
            <DropdownMenu {...dropdownMenuProps} open={openMenu}>
              <DropdownMenuTrigger
                {...dropdownTriggerProps}
                onClick={() => {
                  setOpenMenu(true);
                }}
              >
                <button
                  className={`rounded-full p-2 ${
                    isHost ? 'hover:bg-amber-200/50' : 'hover:bg-slate-200/50'
                  }`}
                >
                  <MoreVerticalIcon className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                ref={ref}
                {...dropdownContentProps}
                onInteractOutside={() => {
                  setOpenMenu(false);
                }}
              >
                <Dialog open={openAlert} {...dialogProps}>
                  {menuItems?.map(item => {
                    return (
                      <>
                        <DropdownMenuItem
                          key={item.id}
                          onClick={
                            item.dialog
                              ? () => {
                                  setOpenAlert(true);
                                }
                              : () => {
                                  item.onClick && item.onClick();
                                  setOpenMenu(false);
                                }
                          }
                          {...item.itemProps}
                        >
                          {item.icon}
                          <span>{item.text}</span>
                        </DropdownMenuItem>
                        <DialogContent
                          onInteractOutside={() => {
                            setOpenMenu(false);
                            setOpenAlert(false);
                          }}
                          {...dialogContentProps}
                        >
                          <DialogHeader {...dialogHeaderProps}>
                            <DialogTitle {...dialogTitleProps}>
                              {item.dialogTitle}
                            </DialogTitle>
                            <DialogDescription {...dialogDescriptionProps}>
                              {item.dialogDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter {...dialogFooterProps}>
                            <Button
                              variant={item.dialogCancelVariant}
                              onClick={() => {
                                setOpenMenu(false);
                                setOpenAlert(false);
                              }}
                              {...dialogCancelProps}
                            >
                              {item.dialogCancelText}
                            </Button>
                            <Button
                              variant={item.dialogConfirmVariant}
                              onClick={() => {
                                if (item && item.onClick) {
                                  item.onClick();
                                }
                                setOpenMenu(false);
                                setOpenAlert(false);
                              }}
                              {...dialogConfirmProps}
                            >
                              {item.dialogConfirmText}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                        {item.separator ? <DropdownMenuSeparator /> : null}
                      </>
                    );
                  })}
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    );
  }
);
PostCardHeader.displayName = 'PostCardHeader';

interface PostCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isHost: boolean;
  isDeleted: boolean;
  content: string;
  deletedText?: string;
  replyLabel?: string;
  hasReply: boolean;
  onReplyClick?: () => void;
}

const PostCardContent = React.forwardRef<HTMLDivElement, PostCardContentProps>(
  (
    {
      className,
      isHost,
      isDeleted,
      deletedText,
      content,
      replyLabel,
      hasReply,
      onReplyClick,
      ...props
    },
    ref
  ) => (
    <>
      {isDeleted ? (
        <div className="flex items-center gap-2 py-2">
          <TrashIcon />
          {deletedText}
        </div>
      ) : (
        <div
          ref={ref}
          className={cn('flex flex-col gap-2 text-sm text-black', className)}
          {...props}
        >
          {content}
        </div>
      )}
      {isDeleted && !hasReply ? null : onReplyClick ? (
        <Button
          variant="ghost"
          onClick={onReplyClick}
          className={`inline-flex items-center justify-start gap-2 p-0 text-primary-500 hover:text-primary-500 hover:underline ${
            !isDeleted && isHost
              ? 'hover:bg-amber-200/50'
              : 'hover:bg-slate-200/50'
          }`}
        >
          <MessageSquareIcon />
          {replyLabel}
        </Button>
      ) : null}
    </>
  )
);
PostCardContent.displayName = 'PostCardContent';

interface ReplyHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description 뒤로가기 버튼에 표시할 라벨
   */
  label: string;
  /**
   * @description 뒤로가기 버튼 클릭 시 호출되는 콜백 함수
   */
  onBackClick?: () => void;
}

const ReplyHeader = React.forwardRef<HTMLDivElement, ReplyHeaderProps>(
  ({ className, label, onBackClick, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props}>
      <button
        onClick={onBackClick}
        className="group flex items-center border-b p-2 hover:underline"
      >
        <ChevronLeftIcon className="h-6 w-6 duration-300 ease-out group-hover:translate-x-[-4px]" />
        {label}
      </button>
    </div>
  )
);

interface ReplySeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  replyLabel?: string;
}

const ReplySeparator = React.forwardRef<HTMLDivElement, ReplySeparatorProps>(
  ({ className, replyLabel, ...props }, ref) => (
    <div ref={ref} className={cn('flex w-full p-2', className)} {...props}>
      <Badge className="mr-2 shrink-0 bg-primary-500 hover:bg-primary-500">
        {replyLabel}
      </Badge>
      <Separator className="my-2 shrink bg-primary-500" />
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
