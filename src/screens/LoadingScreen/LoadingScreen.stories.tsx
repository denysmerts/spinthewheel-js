import type { Meta, StoryObj } from "@storybook/react";
import { LoadingScreen } from "./LoadingScreen";

// Define the meta information for Storybook
const meta: Meta<typeof LoadingScreen> = {
  title: "Screens/LoadingScreen",
  component: LoadingScreen,
};

export default meta;

type Story = StoryObj<typeof LoadingScreen>;

export const Default: Story = {
  render: () => <LoadingScreen />,
};
