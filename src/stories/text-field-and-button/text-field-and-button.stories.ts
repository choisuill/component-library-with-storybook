import type { Meta, StoryObj } from '@storybook/react';

import TextFieldAndButton from '../../components/text-field-and-button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextFieldAndButton> = {
  title: 'Form/TextFieldAndButton',
  component: TextFieldAndButton,
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
    removeAble: {
      description: '전체 지우기 유무',
      control: 'boolean',
    },
    disabled: {
      description: '비활성화',
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
    warned: {
      description: '유효하지 않은 값 작성시 helper text 색상 변경',
      control: 'boolean',
    },
    buttonText: {
      description: '버튼 텍스트',
      control: 'text',
    },
    onChange: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
    onClickButton: {
      description: 'Button 컴포넌트의 onClick 입니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldAndButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'TextFieldAndButton',
    label: 'TextFieldAndButton',
    buttonText: 'button',
  },
};
