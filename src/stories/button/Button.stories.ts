import type { Meta, StoryObj } from '@storybook/react';

import Button from '../../components/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '크기',
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: {
      description: '테마',
      control: 'radio',
      options: ['primary', 'secondary', 'black', 'white'],
    },
    variant: {
      description: '타입',
      control: 'radio',
      options: ['fulled', 'outline'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      description: '현재 버전의 Button의 아이콘은 material-symbols-rounded 목록의 아이콘만 삽입 가능합니다.',
      control: 'text',
    },
    iconPosition: {
      description: '아이콘 위치',
      control: 'radio',
      options: ['left', 'right'],
    },
    onClick: {
      description: 'Button 컴포넌트의 onClick 입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    text: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    text: 'Button',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    text: 'Button',
  },
};

export const White: Story = {
  args: {
    color: 'white',
    text: 'Button',
  },
};

export const Fulled: Story = {
  args: {
    variant: 'fulled',
    color: 'primary',
    text: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    color: 'primary',
    text: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: 'Button',
  },
};

export const Icon: Story = {
  args: {
    color: 'primary',
    text: 'Button',
    icon: 'add',
  },
};

export const ReverseIcon: Story = {
  args: {
    color: 'primary',
    text: 'Button',
    icon: 'add',
    iconPosition: 'right',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    text: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Button',
  },
};
