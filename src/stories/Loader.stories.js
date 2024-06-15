import { Loader } from "../component/spinner/loader";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Component/Loader',
  component: Loader,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  argTypes:{
    size: {
      description: 'Size for loader',
      action: 'string',
    }
  }
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Large = {
  args: {
    size: 'large',
  },
};

export const Medium = {
    args: {
      size: 'medium',
    },
  };

  export const Small = {
    args: {
      size: 'small',
    },
  };