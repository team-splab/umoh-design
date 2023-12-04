import React from 'react';
import { Button } from 'components';
import { LuChevronRight, LuLoader2, LuMail } from 'react-icons/lu';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    componentSubtitle:
      'Button은 사용자가 한 번의 탭으로 작업을 수행하고 선택할 수 있는 컴포넌트입니다. ',
    docs: {
      description: {
        component: `
- variant값으로 "default" | "secondary" |  "destructive" | "outline" | "ghost" | "link" 중 하나를 선택할 수 있습니다.\n
- size값으로 "default" | "sm" |  "lg" | "icon" 중 하나를 선택할 수 있습니다.\n
- disabled값으로 true | false 중 하나를 선택할 수 있습니다.\n
- asChild값으로 true | false 중 하나를 선택할 수 있습니다.
`,
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Button의 Variant를 설정합니다.',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'default' },
      },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'ghost',
        'link',
      ],
      control: {
        type: 'radio',
      },
    },
    size: {
      description: 'Button의 size를 설정합니다.',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'default' },
      },
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'radio',
      },
    },
    disabled: {
      description: 'Button의 disabled 여부를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    asChild: {
      description: 'Button의 asChild 여부를 설정합니다.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
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
} satisfies Meta<typeof Button>;

export default meta;

export const DefaultButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: '기본으로 사용되는 Default Button입니다.',
      },
    },
  },
  render: args => (
    <Button variant="default" {...args}>
      Button
    </Button>
  ),
};

export const SecondaryButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: '두 번째로 중요한 작업에 사용되는 Secondary Button입니다.',
      },
    },
  },
  render: args => (
    <Button variant="secondary" {...args}>
      Button
    </Button>
  ),
};

export const DestructiveButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'Error, Warning 등에 사용되는 Destructive Button입니다.',
      },
    },
  },
  render: args => (
    <Button variant="destructive" {...args}>
      Button
    </Button>
  ),
};

export const OutlineButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'label과 outline으로 구성된 Outline Button입니다.',
      },
    },
  },
  render: args => (
    <Button variant="outline" {...args}>
      Button
    </Button>
  ),
};

export const GhostButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story:
          'label로만 구성된 Button으로, UI를 해치지 않고싶을 때 사용되는 Ghost Button입니다.',
      },
    },
  },

  render: args => (
    <Button variant="ghost" {...args}>
      Button
    </Button>
  ),
};

export const LinkButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story:
          'Button의 label이 Link로 연결되어있는 경우에 사용되는 Link Button입니다..',
      },
    },
  },
  render: args => (
    <Button variant="link" {...args}>
      Button
    </Button>
  ),
};

export const IconButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'Button의 label이 Icon으로 구성된 Icon Button입니다.',
      },
    },
  },
  render: args => (
    <Button size="icon" {...args}>
      <LuChevronRight className="h-4 w-4" />
    </Button>
  ),
};

export const WithIconButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'Button의 label이 icon과 text로 구성된 With Icon Button입니다.',
      },
    },
  },
  render: args => (
    <Button {...args}>
      <LuMail className="mr-2 h-4 w-4" />
      Login with Elumail
    </Button>
  ),
};

export const LoadingButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'Loading시에 사용되는 Loading Button입니다.',
      },
    },
  },
  render: args => (
    <Button disabled {...args}>
      <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

export const AsChildButton: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: `asChild prop을 사용하면 이벤트 처리, props 및 ref 전달과 같은 필요한 동작을 유지하면서 기본 구성 요소를 사용자 정의 하위 요소로 바꿀 수 있습니다.\n
다른 라이브러리의 구성 요소를 사용하거나 렌더링을 위해 다른 요소를 사용하는 경우에 유용합니다.`,
      },
    },
  },
  render: args => (
    <Button asChild {...args}>
      <a href="/login">Login</a>
    </Button>
  ),
};
