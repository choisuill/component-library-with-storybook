import type { Meta, StoryObj } from '@storybook/react';

import PasswordField from '../../components/password-field';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PasswordField> = {
  title: 'Form/PasswordField',
  component: PasswordField,
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
      description: '초기 값',
      control: 'text',
    },
    placeholder: {
      description: 'placeholder',
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
    warned: {
      description: '유효하지 않은 값 작성시 helper text 색상 변경',
      control: 'boolean',
    },
    visibility: {
      description: '비밀번호 작성한 값을 보여주는 버튼',
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
type Story = StoryObj<typeof PasswordField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'PasswordField',
    label: 'PasswordField',
    visibility: true,
  },
};
