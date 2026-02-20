import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guia de Implementação de IA na Escola | SemeIA Educação",
  description:
    "Baixe o guia gratuito que mostra como implementar Inteligência Artificial de forma ética, prática e segura na sua instituição.",
  openGraph: {
    title: "Guia de Implementação de IA na Escola | SemeIA Educação",
    description:
      "Material gratuito para gestores escolares. Políticas de uso, LGPD, formação de professores e roadmap de 90 dias.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      {children}
    </div>
  );
}
