import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FortuneWheel } from "./FortuneWheel";

// Define the meta information for Storybook
const meta: Meta<typeof FortuneWheel> = {
  title: "Components/FortuneWheel",
  component: FortuneWheel,
};

export default meta;

type Story = StoryObj<typeof FortuneWheel>;

// Define the Default story
export const Default: Story = {
  render: () => {
    const [isSpinning, setIsSpinning] = useState(false);

    return <FortuneWheel spinning={isSpinning} setSpinning={setIsSpinning} />;
  },
};
