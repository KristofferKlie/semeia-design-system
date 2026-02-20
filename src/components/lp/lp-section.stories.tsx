import type { Meta, StoryObj } from "@storybook/react";
import { LPSection } from "./lp-section";
import { LPCard, LPCardIcon } from "./lp-card";
import { LPBadge } from "./lp-badge";
import { LPDivider } from "./lp-divider";

const meta: Meta<typeof LPSection> = {
  title: "LP/Section",
  component: LPSection,
  tags: ["autodocs"],
  parameters: { backgrounds: { default: "dark" }, layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof LPSection>;

export const BackgroundVariants: Story = {
  render: () => (
    <div>
      <LPSection variant="primary" size="sm">
        <p className="lp-eyebrow mb-2">primary — #050505</p>
        <h2 className="lp-h2">Primary Background</h2>
      </LPSection>
      <LPSection variant="secondary" size="sm">
        <p className="lp-eyebrow mb-2">secondary — #0F0F0F</p>
        <h2 className="lp-h2">Secondary Background</h2>
      </LPSection>
      <LPSection variant="tertiary" size="sm">
        <p className="lp-eyebrow mb-2">tertiary — #1A1A1A</p>
        <h2 className="lp-h2">Tertiary Background</h2>
      </LPSection>
    </div>
  ),
};

export const LightMode: Story = {
  render: () => (
    <div>
      <LPSection variant="primary" size="sm" light>
        <p className="lp-eyebrow mb-2">light mode</p>
        <h2 className="lp-h2 mb-4">Light Mode Section</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <LPCard accent="primary">
            <h3 className="lp-h3 mb-2">Card One</h3>
            <p className="lp-text text-base">Light mode card with accent.</p>
          </LPCard>
          <LPCard accent="secondary">
            <h3 className="lp-h3 mb-2">Card Two</h3>
            <p className="lp-text text-base">Different accent color.</p>
          </LPCard>
          <LPCard accent="accent">
            <h3 className="lp-h3 mb-2">Card Three</h3>
            <p className="lp-text text-base">Orange accent variant.</p>
          </LPCard>
        </div>
      </LPSection>
    </div>
  ),
};

export const ComposedSection: Story = {
  name: "Full Composed Section",
  render: () => (
    <LPSection variant="secondary">
      <div className="text-center mb-12">
        <LPBadge className="mb-4">soluções</LPBadge>
        <h2 className="lp-h2 mb-4">Nossas Linhas de Atuação</h2>
        <LPDivider className="mb-6" />
        <p className="lp-text max-w-2xl mx-auto">Soluções completas para a jornada de inovação da sua instituição.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <LPCard accent="primary">
          <LPCardIcon variant="brand" className="mx-auto mb-4"><span>🎓</span></LPCardIcon>
          <h3 className="lp-h3 text-center mb-3">Formação</h3>
          <p className="lp-text text-base text-center">Workshop prático para multiplicar a produtividade docente.</p>
        </LPCard>
        <LPCard accent="secondary">
          <LPCardIcon variant="secondary" className="mx-auto mb-4"><span>🎤</span></LPCardIcon>
          <h3 className="lp-h3 text-center mb-3">Palestras</h3>
          <p className="lp-text text-base text-center">Inspiração e tecnologia com Marta Bitencourt.</p>
        </LPCard>
        <LPCard accent="accent">
          <LPCardIcon variant="accent" className="mx-auto mb-4"><span>🔧</span></LPCardIcon>
          <h3 className="lp-h3 text-center mb-3">Consultoria</h3>
          <p className="lp-text text-base text-center">Plano diretor de IA e implementação estratégica.</p>
        </LPCard>
      </div>
    </LPSection>
  ),
};
