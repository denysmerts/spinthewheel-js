import type { Meta, StoryObj } from "@storybook/react";
import InfoLabel from "./InfoLabel";

// Define the meta information for Storybook
const meta: Meta<typeof InfoLabel> = {
  title: "InfoLabel",
  component: InfoLabel,
};

export default meta;

type Story = StoryObj<typeof InfoLabel>;

export const Default: Story = {
  render: () => <InfoLabel spinsAmount={5} />,
};
