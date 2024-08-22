import type { Meta, StoryObj } from "@storybook/react";
import { NavigationButton } from "./NavigationButton";

// Define the meta information for Storybook
const meta: Meta<typeof NavigationButton> = {
  title: "Components/NavigationButton",
  component: NavigationButton,
};

export default meta;

type Story = StoryObj<typeof NavigationButton>;

const handleClick = () => {
  console.log("Button clicked!");
};

export const InfoButton: Story = {
  render: () => <NavigationButton type="how-to-play" onClick={handleClick} />,
};

export const SettingsButton: Story = {
  render: () => <NavigationButton type="settings" onClick={handleClick} />,
};
