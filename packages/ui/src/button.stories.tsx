import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["28", "32", "36", "40", "44", "48", "52"],
    },
    colorPalette: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "버튼",
    size: "52",
    variant: "solid",
    colorPalette: "primary",
  },
};