import type { Meta, StoryObj } from "@storybook/react";
import CountDown from "./CountDown";

// Define the meta information for Storybook
const meta: Meta<typeof CountDown> = {
  title: "CountDown",
  component: CountDown,
};

export default meta;

type Story = StoryObj<typeof CountDown>;

// Define the SpinButton story
export const Default: Story = {
  render: () => <CountDown spinsNumber={5} />,
};
