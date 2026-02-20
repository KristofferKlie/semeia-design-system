import type { Meta, StoryObj } from "@storybook/react";
import { LPGrain } from "./lp-grain";

const meta: Meta<typeof LPGrain> = {
  title: "LP/Textures",
  component: LPGrain,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "dark" }, layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof LPGrain>;

export const GrainOverlay: Story = {
  render: () => (
    <LPGrain className="lp-bg-primary p-24 text-center">
      <h2 className="lp-h2 mb-4">Grain Texture Overlay</h2>
      <p className="lp-text">Film-like noise texture adds depth to dark backgrounds.</p>
    </LPGrain>
  ),
};

export const GrainWithGlow: Story = {
  name: "Grain + Brand Glow",
  render: () => (
    <LPGrain glow="brand" className="lp-bg-primary p-24 text-center">
      <h2 className="lp-h2 mb-4">Grain + Green Glow</h2>
      <p className="lp-text">Radial glow centered with grain overlay.</p>
    </LPGrain>
  ),
};

export const GlowVariants: Story = {
  render: () => (
    <div className="space-y-0">
      <LPGrain glow="brand" className="lp-bg-primary p-16 text-center">
        <p className="lp-eyebrow mb-2">brand glow</p>
        <h2 className="lp-h2">Green Glow</h2>
      </LPGrain>
      <LPGrain glow="accent" className="lp-bg-primary p-16 text-center">
        <p className="lp-eyebrow-accent mb-2">accent glow</p>
        <h2 className="lp-h2">Orange Glow</h2>
      </LPGrain>
      <LPGrain glow="blue" className="lp-bg-primary p-16 text-center">
        <p className="lp-eyebrow-muted mb-2">blue glow</p>
        <h2 className="lp-h2">Blue Glow</h2>
      </LPGrain>
    </div>
  ),
};

export const ScrollRevealDemo: Story = {
  name: "Scroll Reveal (CSS Classes)",
  render: () => (
    <div className="lp-bg-primary p-12 space-y-8">
      <p className="lp-text text-center mb-8">
        Scroll reveal classes: <code className="font-mono text-xs bg-white/10 px-2 py-1 rounded">lp-reveal</code>,{" "}
        <code className="font-mono text-xs bg-white/10 px-2 py-1 rounded">lp-reveal-left</code>,{" "}
        <code className="font-mono text-xs bg-white/10 px-2 py-1 rounded">lp-reveal-scale</code>
      </p>
      <div className="lp-reveal revealed text-center p-8 lp-bg-secondary rounded-xl">
        <p className="lp-h3">Slide Up (revealed)</p>
      </div>
      <div className="lp-reveal-left revealed text-center p-8 lp-bg-secondary rounded-xl">
        <p className="lp-h3">Slide from Left (revealed)</p>
      </div>
      <div className="lp-reveal-scale revealed text-center p-8 lp-bg-secondary rounded-xl">
        <p className="lp-h3">Scale In (revealed)</p>
      </div>
      <p className="lp-text-sm text-center">
        Use <code className="font-mono text-xs bg-white/10 px-2 py-1 rounded">{"<LPScrollReveal>"}</code> component for automatic IntersectionObserver.
      </p>
    </div>
  ),
};
