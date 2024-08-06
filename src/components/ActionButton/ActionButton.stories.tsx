import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./ActionButton";

// Define the meta information for Storybook
const meta: Meta<typeof ActionButton> = {
  title: "ActionButton",
  component: ActionButton,
};

export default meta;

type Story = StoryObj<typeof ActionButton>;

// Define the handleClick function to use in stories
const handleClick = () => {
  console.log("Button clicked!");
};

// Define the SpinButton story
export const SpinButton: Story = {
  render: () => (
    <ActionButton translationKey="spin" handleClick={handleClick} />
  ),
};

// Define the CollectButton story
export const CollectButton: Story = {
  render: () => (
    <ActionButton translationKey="collect" handleClick={handleClick} />
  ),
};
