import { Input } from "../component/input/Input";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Component/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  argTypes:{
    onChange: {
      description: 'Handle behaviour when input event',
      action: 'type',
    },
    placeholder: {
      description: 'Name for placeholder',
      action: 'string',
    },
    label: {
      description: 'Name for input label',
      action: 'string',
    },
    size: {
      description: 'Size for input',
      action: 'string',
    },
    error: {
      description: 'Error message if any',
      action: 'string',
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large = {
  args: {
    size: 'large',
    label: 'Label Text',
    placeholder: 'Input Name',
    error: ''
  },
};

export const Medium = {
    args: {
      size: 'medium',
      label: 'Label Text',
      placeholder: 'Input Name',
      error: ''
    },
  };