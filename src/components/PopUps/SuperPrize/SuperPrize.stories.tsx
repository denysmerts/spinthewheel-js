import type { Meta, StoryObj } from "@storybook/react";
import { SuperPrize } from "./SuperPrize";

// Define the meta information for Storybook
const meta: Meta<typeof SuperPrize> = {
  title: "Components/SuperPrize",
  component: SuperPrize,
};

export default meta;

type Story = StoryObj<typeof SuperPrize>;

export const Default: Story = {
  render: () => <SuperPrize closePopUp={() => console.log("Popup closed")} collectSuperPrize={() => console.log("PrizeCollected")} />, // Mock function for closePopUp
};
