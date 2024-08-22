import type { Meta, StoryObj } from "@storybook/react";
import { MainScreen } from "./MainScreen";

// Define the meta information for Storybook
const meta: Meta<typeof MainScreen> = {
  title: "Screens/MainScreen",
  component: MainScreen,
};

export default meta;

type Story = StoryObj<typeof MainScreen>;

export const Default: Story = {
  render: () => <MainScreen />,
};
