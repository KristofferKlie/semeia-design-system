import type { Meta, StoryObj } from "@storybook/react";
import { LPBadge } from "./lp-badge";

const meta: Meta<typeof LPBadge> = {
  title: "LP/Badge",
  component: LPBadge,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "dark" } },
};
export default meta;
type Story = StoryObj<typeof LPBadge>;

export const Brand: Story = { args: { children: "Inovação em Educação", variant: "brand" } };
export const Accent: Story = { args: { children: "Novo", variant: "accent" } };
export const White: Story = { args: { children: "Destaque", variant: "white" } };
export const Secondary: Story = { args: { children: "Info", variant: "secondary" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <LPBadge variant="brand">Brand</LPBadge>
      <LPBadge variant="accent">Accent</LPBadge>
      <LPBadge variant="secondary">Secondary</LPBadge>
      <LPBadge variant="white">White</LPBadge>
    </div>
  ),
};
