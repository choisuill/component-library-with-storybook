import type { Meta, StoryObj } from '@storybook/react';

import Radio from '../../components/radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Radio> = {
  title: 'Form/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: '테마',
      control: 'radio',
      options: ['primary', 'secondary', 'black', 'white'],
    },
    label: {
      control: 'text',
    },
    htmlFor: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
    onChange: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Radio',
    htmlFor: 'primary-Radio',
    defaultChecked: true,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Radio',
    htmlFor: 'secondary-Radio',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    label: 'Radio',
    htmlFor: 'black-Radio',
  },
};

export const White: Story = {
  args: {
    color: 'white',
    label: 'Radio',
    htmlFor: 'white-Radio',
  },
};
