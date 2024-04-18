import type { Meta, StoryObj } from '@storybook/react';

import Input from '../../components/input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'htmlFor 속성에 사용되므로 페이지에 딱 한개만 존재해야 함',
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    removeAble: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    onChange: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: 'placeholder',
  },
};
