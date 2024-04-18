import type { Meta, StoryObj } from '@storybook/react';

import Search from '../../components/search';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Search> = {
  title: 'Form/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'htmlfor 설정',
      control: 'text',
    },
    defaultValue: {
      description: '초기 값',
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
    iconPosition: {
      description: '돋보기 아이콘 위치',
      control: 'radio',
      options: ['left', 'right'],
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
type Story = StoryObj<typeof Search>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'Search',
  },
};
