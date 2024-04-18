import type { Meta, StoryObj } from '@storybook/react';

import SelectField from '../../components/select-field';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SelectField> = {
  title: 'Form/SelectField',
  component: SelectField,
  tags: ['autodocs'],
  argTypes: {
    id: {
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
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    options: {
      control: 'object',
    },
    selected: {
      description: 'options 아이템의 키값이 selected로 설정됨',
      control: 'text',
    },
    onChange: {
      description: 'Input 컴포넌트의 onChange 입니다. e.target.value 값을 올려줍니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'SelectField',
    label: 'SelectField',
    helperText: 'helper text',
    options: {
      one: 'one',
      two: 'two',
      three: 'three',
      four: 'four',
    },
  },
};
