import React from 'react';
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle: 'Carousel은 슬라이드로 이루어진 컴포넌트입니다',
    docs: {
      description: {
        component: `
- API Reference : https://www.embla-carousel.com/api
`,
      },
    },
  },
  decorators: [
    Story => (
      <div className="p-12">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Carousel>;

export default meta;

export const DefaultCarousel: StoryObj<typeof Carousel> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Carousel입니다.',
      },
    },
  },
  render: args => (
    <Carousel className="w-full max-w-xs" {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
