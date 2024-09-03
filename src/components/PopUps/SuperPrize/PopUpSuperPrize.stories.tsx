import type { Meta, StoryObj } from "@storybook/react";
import { PopUpSuperPrize } from "./PopUpSuperPrize";

// Define the meta information for Storybook
const meta: Meta<typeof PopUpSuperPrize> = {
  title: "Components/PopUpSuperPrize",
  component: PopUpSuperPrize,
};

export default meta;

type Story = StoryObj<typeof PopUpSuperPrize>;

export const Default: Story = {
  render: () => <PopUpSuperPrize />,
};
