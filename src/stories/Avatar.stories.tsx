import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "@/lib/atoms/Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: "Example/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  name: "John Smith",
};

export const WithImage = Template.bind({});

WithImage.args = {
  name: "John Smith",
  shape: "circle",
  image: {
    src: "https://placehold.co/600x400",
  },
};
