import type { Meta, StoryObj } from "@storybook/react";
import { TitleText } from "./TitleText";

// Define the meta information for Storybook
const meta: Meta<typeof TitleText> = {
  title: "Components/TitleText",
  component: TitleText,
};

export default meta;

type Story = StoryObj<typeof TitleText>;

export const Default: Story = {
  render: () => <TitleText />,
};
