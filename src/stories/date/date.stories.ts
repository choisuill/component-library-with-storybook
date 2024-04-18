import type { Meta, StoryObj } from '@storybook/react';

import Date from '../../components/date';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Date> = {
  title: 'Form/Date',
  component: Date,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'htmlFor 속성에 사용되므로 페이지에 딱 한개만 존재해야 함',
      control: 'text',
    },
    defaultValue: {
      control: 'text',
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
type Story = StoryObj<typeof Date>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    defaultValue: '2022-01-02',
  },
};
