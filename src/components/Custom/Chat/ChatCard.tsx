import * as React from 'react';

import { cn } from 'lib/twUtils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { MessageSquareIcon } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'components/Base/Avatar/Avatar';
import { Badge } from 'components/Base/Badge/Badge';

interface ChatData {
  id: string;
  host: boolean;
  profile_img: string;
  name: string;
  date: string;
  content: string;
  reply: {
    id: string;
    host: boolean;
    profile_img: string;
    name: string;
    date: string;
    content: string;
    reply: ChatData['reply'];
  }[];
}

const ChatCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2 bg-white px-6 py-2 ', className)}
    {...props}
  />
));
ChatCard.displayName = 'ChatCard';

interface ChatCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Pick<ChatData, 'host' | 'profile_img' | 'name' | 'date'> {}

const ChatCardHeader = React.forwardRef<HTMLDivElement, ChatCardHeaderProps>(
  (
    {
      className,
      host = false,
      profile_img = 'https://ui-avatars.com/api/?name=Guest.png',
      name = 'guest',
      date = new Date().toDateString(),
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn('flex items-center gap-4', className)}
      {...props}
    >
      <Avatar className="rounded-lg">
        <AvatarImage src={profile_img} alt="profile_img" />
        <AvatarFallback>profile_img</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start gap-1">
        <p className="flex items-center gap-1 text-sm font-normal">
          {name}
          {host && <Badge variant="default">host</Badge>}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
      </div>
    </div>
  )
);
ChatCardHeader.displayName = 'ChatCardHeader';

interface ChatCardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  reply: ChatData['reply'];
}

const ChatCardContent = React.forwardRef<HTMLDivElement, ChatCardContentProps>(
  ({ className, content, reply, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col gap-2 text-sm', className)}
      {...props}
    >
      {content}
      {reply?.length !== 0 && (
        <AccordionPrimitive.Root type="multiple">
          <AccordionPrimitive.Item value="reply">
            <AccordionPrimitive.Trigger className="flex items-center gap-2 text-gray-600">
              <MessageSquareIcon />
              Reply ({reply.length})
            </AccordionPrimitive.Trigger>
            <AccordionPrimitive.AccordionContent>
              {reply.map(item => (
                <ChatCard id={item.id} key={item.id} className="border-l-2">
                  <ChatCardHeader
                    host={item.host}
                    profile_img={item.profile_img}
                    name={item.name}
                    date={item.date}
                  />
                  <ChatCardContent content={item.content} reply={item.reply} />
                </ChatCard>
              ))}
            </AccordionPrimitive.AccordionContent>
          </AccordionPrimitive.Item>
        </AccordionPrimitive.Root>
      )}
    </div>
  )
);
ChatCardContent.displayName = 'ChatCardContent';

export type { ChatData, ChatCardHeaderProps, ChatCardContentProps };

export { ChatCard, ChatCardHeader, ChatCardContent };
