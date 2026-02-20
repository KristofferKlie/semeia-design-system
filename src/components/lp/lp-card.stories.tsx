import type { Meta, StoryObj } from "@storybook/react";
import { LPCard, LPCardIcon } from "./lp-card";

const meta: Meta<typeof LPCard> = {
  title: "LP/Card",
  component: LPCard,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
    layout: "padded",
  },
};
export default meta;
type Story = StoryObj<typeof LPCard>;

export const Default: Story = {
  render: () => (
    <LPCard className="max-w-sm">
      <LPCardIcon>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </LPCardIcon>
      <h3 className="lp-h3 mt-4 mb-2">Feature Title</h3>
      <p className="lp-text text-base">Description of this feature goes here with enough text to show wrapping.</p>
    </LPCard>
  ),
};

export const WithAccentColors: Story = {
  name: "Accent Color System",
  render: () => (
    <div className="grid grid-cols-3 gap-6 max-w-4xl">
      <LPCard accent="primary">
        <LPCardIcon variant="brand"><span className="text-lg">🎓</span></LPCardIcon>
        <h3 className="lp-h3 mt-4 mb-2">Formação</h3>
        <p className="lp-text text-base">Workshop prático para professores.</p>
      </LPCard>
      <LPCard accent="secondary">
        <LPCardIcon variant="secondary"><span className="text-lg">🎤</span></LPCardIcon>
        <h3 className="lp-h3 mt-4 mb-2">Palestras</h3>
        <p className="lp-text text-base">Inspiração e tecnologia.</p>
      </LPCard>
      <LPCard accent="accent">
        <LPCardIcon variant="accent"><span className="text-lg">🔧</span></LPCardIcon>
        <h3 className="lp-h3 mt-4 mb-2">Consultoria</h3>
        <p className="lp-text text-base">Plano diretor de IA.</p>
      </LPCard>
    </div>
  ),
};

export const AllAccents: Story = {
  name: "All Accent Variants",
  render: () => (
    <div className="grid grid-cols-4 gap-4 max-w-5xl">
      {(["primary", "secondary", "accent", "gold", "blue", "rosa", "terra"] as const).map((acc) => (
        <LPCard key={acc} accent={acc} className="text-center">
          <p className="lp-eyebrow mb-2">{acc}</p>
          <h3 className="lp-h3">Card</h3>
        </LPCard>
      ))}
    </div>
  ),
};

export const SmallCard: Story = {
  render: () => (
    <LPCard size="sm" className="max-w-xs">
      <h3 className="lp-h3 mb-2">Compact Card</h3>
      <p className="lp-text text-sm">Smaller padding for tight layouts.</p>
    </LPCard>
  ),
};
