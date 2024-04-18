import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from '../../components/checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: '테마',
      control: 'radio',
      options: ['primary', 'secondary', 'black', 'white'],
    },
    children: {
      description: 'HTML Elemenet, React Element, string 등 넣을 수 있음',
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
type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Checkbox',
    htmlFor: 'primary-checkbox',
    defaultChecked: true,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Checkbox',
    htmlFor: 'secondary-checkbox',
  },
};

export const Black: Story = {
  args: {
    color: 'black',
    children: 'Checkbox',
    htmlFor: 'black-checkbox',
  },
};

export const White: Story = {
  args: {
    color: 'white',
    children: 'Checkbox',
    htmlFor: 'white-checkbox',
  },
};
