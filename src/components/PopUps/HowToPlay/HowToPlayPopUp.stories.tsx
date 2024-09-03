import type { Meta, StoryObj } from "@storybook/react";
import { HowToPlayPopUp } from "./HowToPlayPopUp";

// Define the meta information for Storybook
const meta: Meta<typeof HowToPlayPopUp> = {
  title: "Components/HowToPlayPopUp",
  component: HowToPlayPopUp,
};

export default meta;

type Story = StoryObj<typeof HowToPlayPopUp>;

const handleClick = () => {
  console.log("closePopUp!");
};

export const Default: Story = {
  render: () => <HowToPlayPopUp closePopUp={handleClick} isClosed={false} />,
};
