import type { Meta, StoryObj } from '@storybook/react';

import SelectAndTextField from '../../components/select-and-text-field';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SelectAndTextField> = {
  title: 'Form/SelectAndTextField',
  component: SelectAndTextField,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Text field에 htmlfor 적용',
      control: 'text',
    },
    label: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    warned: {
      description: '유효하지 않은 값 작성시 helper text 색상 변경',
      control: 'boolean',
    },
    disabled: {
      description: '비활성화',
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
    selected: {
      description: '초기 선택값',
      control: 'text',
    },
    defaultValue: {
      description: '초기 텍스트값',
      control: 'text',
    },
    placeholder: {
      description: 'Text field placeholder',
      control: 'text',
    },
    removeAble: {
      description: 'Text field 지우기 버튼 유무',
      control: 'boolean',
    },
    onChangeSelect: {
      description: 'Select 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
    onChangeText: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectAndTextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'SelectAndTextField',
    label: 'SelectAndTextField',
    helperText: 'helper text',
    options: {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
    },
    placeholder: 'placeholder',
  },
};
