import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "LP/Typography",
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "dark" }, layout: "padded" },
};
export default meta;
type Story = StoryObj;

export const ThreeFontHierarchy: Story = {
  name: "3-Font Hierarchy",
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <div>
        <p className="lp-eyebrow mb-2">Display Font — Fraunces (Headings)</p>
        <h1 className="lp-h1">Semeando o futuro da educação</h1>
      </div>
      <div>
        <p className="lp-eyebrow mb-2">Display Font — Fraunces (H2)</p>
        <h2 className="lp-h2">Nossas Linhas de Atuação</h2>
      </div>
      <div>
        <p className="lp-eyebrow mb-2">Sans Font — Montserrat (H3)</p>
        <h3 className="lp-h3">Feature heading in sans-serif</h3>
      </div>
      <div>
        <p className="lp-eyebrow mb-2">Sans Font — Montserrat (Body)</p>
        <p className="lp-text">Capacitamos escolas, gestores e professores para dominar as ferramentas que estão redefinindo o ensino e a aprendizagem.</p>
      </div>
      <div>
        <p className="lp-eyebrow mb-2">Mono Font — DM Mono (Eyebrow Labels)</p>
        <span className="lp-eyebrow">inovação em educação</span>
      </div>
      <div>
        <p className="lp-eyebrow mb-2">Mono Font — DM Mono (Data)</p>
        <span className="lp-data text-4xl font-bold text-white">R$ 1.297</span>
      </div>
    </div>
  ),
};

export const EyebrowVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="lp-eyebrow">Brand Eyebrow (Green)</p>
      <p className="lp-eyebrow-accent">Accent Eyebrow (Gold)</p>
      <p className="lp-eyebrow-muted">Muted Eyebrow (Gray)</p>
    </div>
  ),
};

export const HeadingScale: Story = {
  render: () => (
    <div className="space-y-4">
      <h1 className="lp-h1">H1 — Display Bold 60px</h1>
      <h2 className="lp-h2">H2 — Display Bold 36px</h2>
      <h3 className="lp-h3">H3 — Sans Semibold 20px</h3>
      <p className="lp-text">Body — Sans Regular 18px</p>
      <p className="lp-text-sm">Small — Sans Regular 14px</p>
    </div>
  ),
};

export const TextGradient: Story = {
  render: () => (
    <h1 className="lp-h1">
      Semeando o futuro da{" "}
      <span className="lp-text-gradient">educação com IA.</span>
    </h1>
  ),
};
