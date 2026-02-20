import type { Meta, StoryObj } from "@storybook/react";
import { LPButton } from "./lp-button";

const meta: Meta<typeof LPButton> = {
  title: "LP/Button",
  component: LPButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "outline", "accent"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof LPButton>;

export const Primary: Story = { args: { children: "Conheça nossas soluções", variant: "primary", size: "lg" } };
export const Outline: Story = { args: { children: "Saiba Mais", variant: "outline", size: "md" } };
export const Accent: Story = { args: { children: "Garanta sua vaga", variant: "accent", size: "lg" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex gap-3">
        <LPButton variant="primary" size="lg">Primary Large</LPButton>
        <LPButton variant="outline" size="lg">Outline Large</LPButton>
        <LPButton variant="accent" size="lg">Accent Large</LPButton>
      </div>
      <div className="flex gap-3">
        <LPButton variant="primary" size="md">Primary</LPButton>
        <LPButton variant="outline" size="md">Outline</LPButton>
        <LPButton variant="accent" size="md">Accent</LPButton>
      </div>
      <div className="flex gap-3">
        <LPButton variant="primary" size="sm">Primary SM</LPButton>
        <LPButton variant="outline" size="sm">Outline SM</LPButton>
        <LPButton variant="accent" size="sm">Accent SM</LPButton>
      </div>
    </div>
  ),
};
