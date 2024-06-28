import { SelectInput } from "../component/select/select";

export default {
    title: 'Component/Select',
    component: SelectInput,
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
          },
          required: {
            description: 'Required field',
            action: 'boolean',
          },
    }
  };
  
  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  
  export const Select = {
    args: {
      size: 'large',
      label: 'Label Text',
      defaultValue: ' Input Value',
      error: '', 
      required: false,
      options: [
        { icon: "🤣", value: "test1", name: "test1" },
        { icon: "😆", value: "test2", name: "test2" },
        { icon: "🥰", value: "test3", name: "test3" },
      ]
    },
  };