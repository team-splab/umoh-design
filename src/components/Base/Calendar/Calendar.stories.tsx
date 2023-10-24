import React, { useState } from 'react';
import { Calendar } from 'components';
import { addDays } from 'date-fns';
import { DateRange, DayClickEventHandler } from 'react-day-picker';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Calendar는 사용자가 날짜를 입력하고 편집할 수 있는 날짜 필드 구성 요소 컴포넌트입니다.',
    docs: {
      description: {
        component: `
이 Calendar Component는 <a href="https://react-day-picker.js.org" target="_blank">React DayPicker</a>를 기반으로 구축되었습니다.\n
`,
      },
    },
  },
  argTypes: {
    defaultMonth: {
      description: 'Calendar의 defaultMonth를 설정합니다.',
      table: {
        type: { summary: 'Date' },
      },
      control: {
        type: 'date',
      },
    },
    mode: {
      description: 'Calendar의 mode를 설정합니다.',
      table: {
        type: { summary: 'single | multiple | range' },
      },
      options: ['single', 'multiple', 'range'],
      control: {
        type: 'radio',
      },
    },
    hidden: {
      description: 'Calendar의 hidden day를 설정합니다.',
      table: {
        type: { summary: 'Date | Date[]' },
      },
      control: {
        type: 'date',
      },
    },
    disabled: {
      description: 'Calendar의 disabled day를 설정합니다.',
      table: {
        type: { summary: 'Date | Date[]' },
      },
      control: {
        type: 'date',
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
} satisfies Meta<typeof Calendar>;

export default meta;

export const SingleModeCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story: 'Single Mode Calendar입니다.',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const MultipleModeCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story: 'Mulitple Mode Calendar입니다.',
      },
    },
  },
  render: () => {
    const [days, setDays] = useState<Date[] | undefined>([]);

    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          mode="multiple"
          min={1}
          selected={days}
          onSelect={setDays}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const RangeModeCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story: 'Range Mode Calendar입니다.',
      },
    },
  },
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(),
      to: addDays(new Date(), 4),
    });

    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          id="test"
          mode="range"
          defaultMonth={new Date()}
          selected={range}
          onSelect={setRange}
        />
      </div>
    );
  },
};

export const HiddenDateCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story: 'Hidden Date Calendar입니다.',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const hiddenDays = [{ from: new Date(), to: addDays(new Date(), 3) }];
    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          mode="single"
          hidden={hiddenDays}
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const DisabledDateCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story: 'Disabled Date Calendar입니다.',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const disabledDays = [{ from: new Date(), to: addDays(new Date(), 3) }];
    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          mode="single"
          disabled={disabledDays}
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    );
  },
};

export const CustomCalendar: StoryObj<typeof Calendar> = {
  parameters: {
    docs: {
      description: {
        story:
          '이미 예약된 날짜를 클릭되지 않도록 modifiers하는 Custom Calendar입니다.',
      },
    },
  },
  render: () => {
    const bookedDays = [new Date(), addDays(new Date(), 1)];
    const bookedStyle = {
      border: '2px solid red',
      backgroundColor: '#ececec',
    };

    const [booked, setBooked] = useState(false);

    const handleDayClick: DayClickEventHandler = (day, modifiers) => {
      setBooked(day && modifiers.booked);
    };

    const footer = booked
      ? 'This day is already booked!'
      : 'Try to pick a booked day.';

    return (
      <div className="flex w-full items-center justify-center">
        <Calendar
          defaultMonth={new Date()}
          modifiers={{ booked: bookedDays }}
          modifiersStyles={{ booked: bookedStyle }}
          onDayClick={handleDayClick}
          footer={footer}
          className="rounded-md border"
        />
      </div>
    );
  },
};
