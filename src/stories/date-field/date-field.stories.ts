import type { Meta, StoryObj } from '@storybook/react';

import DateField from '../../components/date-field';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DateField> = {
  title: 'Form/DateField',
  component: DateField,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'htmlfor 설정',
      control: 'text',
    },
    label: {
      control: 'text',
    },
    defaultValue: {
      description: '초기 값 (date에 맞춰서 넣어줘야 합니다. ex: 2023-01-23)',
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    warned: {
      description: '유효하지 않은 값 작성시 helper text 색상 변경',
      control: 'boolean',
    },
    placeholder: {
      description: 'placeholder',
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    removeAble: {
      description: '전체 지우기 유무',
      control: 'boolean',
    },
    disabled: {
      description: '비활성화',
      control: 'boolean',
    },
    onChange: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'DateField',
    label: 'DateField',
  },
};
