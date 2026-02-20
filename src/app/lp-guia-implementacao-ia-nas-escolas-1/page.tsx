"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookOpen,
  Shield,
  Users,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FileText,
  Clock,
  Award,
  MessageCircle,
} from "lucide-react";

export default function LandingPageGuiaIA() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    escola: "",
    cargo: "",
    cidade: "",
  });
  const [aceite, setAceite] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aceite) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const faqs = [
    {
      pergunta: "O guia é realmente gratuito?",
      resposta:
        "Sim, completamente. Nosso objetivo é ajudar escolas a darem os primeiros passos certos com IA. Sem pegadinhas.",
    },
    {
      pergunta: "Preciso ter conhecimento técnico para aplicar?",
      resposta:
        "Não. O guia foi escrito em linguagem acessível, pensando em gestores com diferentes níveis de familiaridade com tecnologia.",
    },
    {
      pergunta: "O conteúdo serve para qualquer tipo de escola?",
      resposta:
        "O material foi desenvolvido pensando na realidade de escolas privadas brasileiras, desde Educação Infantil até Ensino Médio.",
    },
    {
      pergunta: "Em quanto tempo recebo o material?",
      resposta:
        "Imediatamente após o cadastro, você recebe o link para download no e-mail informado.",
    },
    {
      pergunta: "A SemeIA vai me ligar depois que eu baixar?",
      resposta:
        "Não fazemos ligações não solicitadas. Você receberá apenas e-mails com conteúdos relevantes. Pode cancelar a qualquer momento.",
    },
  ];

  const conteudos = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      titulo: "Diagnóstico inicial",
      descricao: "Como avaliar a maturidade digital da sua escola",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      titulo: "Políticas de uso",
      descricao: "Modelos prontos de diretrizes para professores e estudantes",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "LGPD e IA",
      descricao: "O que você precisa garantir para proteger sua instituição",
    },
    {
      icon: <Users className="h-6 w-6" />,
      titulo: "Formação de professores",
      descricao: "Como preparar sua equipe sem resistência",
    },
    {
      icon: <Award className="h-6 w-6" />,
      titulo: "Casos práticos",
      descricao: "Escolas brasileiras que já implementaram com sucesso",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titulo: "Roadmap de 90 dias",
      descricao: "Plano de ação passo a passo para começar",
    },
  ];

  const beneficios = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      titulo: "Clareza para tomar decisões",
      descricao:
        "Pare de se sentir perdido. Tenha um plano estruturado para guiar cada passo da implementação.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      titulo: "Professores engajados, não resistentes",
      descricao:
        "Descubra como apresentar a IA como aliada, não como ameaça. Sua equipe vai abraçar a mudança.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      titulo: "Conformidade com a LGPD garantida",
      descricao:
        "Políticas prontas para uso que protegem seus estudantes e sua instituição.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      titulo: "Posicionamento como escola inovadora",
      descricao:
        "Famílias buscam escolas que preparam para o futuro. Este guia coloca você à frente.",
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
        <div className="max-w-lg text-center p-8 bg-[#171717] rounded-2xl border border-white/10">
          <div className="w-16 h-16 bg-[#3D8B40] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Parabéns por dar o primeiro passo!
          </h2>
          <p className="text-white/70 mb-8">
            O guia foi enviado para seu e-mail. Enquanto isso, que tal conhecer
            como a SemeIA pode ajudar sua escola a ir ainda mais longe?
          </p>
          <div className="space-y-4">
            <a href="https://semeiaeducacao.ia.br" className="block">
              <Button className="w-full btn-cta" size="lg">
                Conhecer a Formação de Professores
              </Button>
            </a>
            <a href="https://assistente.semeiaeducacao.ia.br" className="block">
              <Button variant="outline" className="w-full border-[#3D8B40] text-[#3D8B40] hover:bg-[#3D8B40] hover:text-white" size="lg">
                Conhecer o Assistente Pedagógico
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="glass-header sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="https://semeiaeducacao.ia.br" className="flex items-center gap-3">
            <Image
              src="/images/logo-semeia.png"
              alt="SemeIA Educação"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </a>
          <a href="#formulario">
            <Button className="btn-cta px-6">Baixar Guia</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg-glow py-24 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-accent inline-block mb-6">
                Material 100% gratuito
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Sua escola está pronta</span>
                <br />
                <span className="text-white">para a IA?</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Baixe o guia gratuito que mostra como implementar Inteligência
                Artificial de forma ética, prática e segura na sua instituição.
              </p>
              <a href="#formulario">
                <Button size="lg" className="btn-cta-accent px-10 py-6 text-lg rounded-lg">
                  Quero o guia gratuito
                </Button>
              </a>
              <p className="mt-4 text-white/50 text-sm">
                Mais de 200 gestores já baixaram este material
              </p>
            </div>
            <div className="hidden md:block">
              <div className="feature-card card-hover transform rotate-3 hover:rotate-0 transition-all duration-500 p-8 text-center">
                <div className="icon-container-lg mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Guia de Implementação de IA na Escola
                </h3>
                <p className="text-white/60 text-sm">SemeIA Educação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 px-4 section-card">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="accent-divider mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            O dilema que toda escola enfrenta hoje
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Professores sobrecarregados. Pais exigindo inovação. Estudantes
            usando IA sem orientação. E você, gestor, no meio de tudo isso
            tentando tomar a melhor decisão.
          </p>
          <p className="text-white mb-12 text-lg font-medium">
            A verdade é que a IA já chegou na sua escola, quer você tenha
            planejado ou não. A pergunta não é mais &quot;se&quot; implementar,
            mas &quot;como&quot; fazer isso da forma certa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Professores perdendo horas com tarefas que a IA poderia apoiar",
              "Falta de diretrizes claras sobre uso de IA por estudantes",
              "Preocupações com plágio e integridade acadêmica",
              "Dúvidas sobre LGPD e privacidade de dados",
              "Pressão por modernização sem saber por onde começar",
            ].map((dor, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/5 p-4 rounded-xl text-left border border-white/10"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'hsl(36 84% 51% / 0.2)' }}>
                  <span className="font-bold text-sm" style={{ color: 'hsl(36 84% 55%)' }}>
                    {index + 1}
                  </span>
                </div>
                <p className="text-white/70">{dor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 px-4 section-dark">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="accent-divider mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Um guia feito por quem vive a realidade da educação brasileira
            </h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Este não é mais um material genérico traduzido de outro país. O Guia
              de Implementação de IA na Escola foi desenvolvido pela SemeIA
              Educação, com base em 30 anos de experiência em educação.
            </p>
          </div>

          <h3 className="text-xl font-bold text-center mb-8 text-white">
            O que você vai encontrar:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conteudos.map((item, index) => (
              <div key={index} className="feature-card card-hover">
                <div className="icon-container mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2 text-white">{item.titulo}</h4>
                <p className="text-white/60 text-sm">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 section-card">
        <div className="container mx-auto max-w-4xl">
          <div className="accent-divider mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            O que muda na sua escola com este guia
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex gap-4">
                <div className="icon-container-lg flex-shrink-0">
                  {beneficio.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-white/60">{beneficio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibilidade */}
      <section className="py-20 px-4 section-brand">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Quem está por trás deste material
          </h2>
          <p className="text-white/90 mb-12 text-lg max-w-2xl mx-auto">
            A SemeIA Educação nasceu da união entre pedagogia profunda e
            tecnologia aplicada. Nossa fundadora, com mais de 30 anos de sala de
            aula, desenvolveu o conceito de &quot;Professor Expandido&quot;: o educador que
            usa IA para ampliar seu impacto, não para ser substituído.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { numero: "30+", texto: "anos de experiência" },
              { numero: "80+", texto: "prompts testados" },
              { numero: "200+", texto: "professores formados" },
              { numero: "100%", texto: "contexto brasileiro" },
            ].map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.numero}</div>
                <div className="stat-label">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="py-20 px-4 section-dark">
        <div className="container mx-auto max-w-xl">
          <div className="accent-divider-orange mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Baixe agora o guia gratuito
          </h2>
          <p className="text-center text-white/60 mb-8">
            Preencha os campos abaixo e receba o material completo no seu e-mail.
          </p>

          <div className="bg-[#171717] rounded-2xl border border-white/10 p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white">
                  Nome completo *
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="form-input bg-[#0A0A0A] border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  E-mail profissional *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="form-input bg-[#0A0A0A] border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="escola" className="text-white">
                  Nome da escola *
                </Label>
                <Input
                  id="escola"
                  name="escola"
                  required
                  value={formData.escola}
                  onChange={handleChange}
                  placeholder="Nome da sua escola"
                  className="form-input bg-[#0A0A0A] border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cargo" className="text-white">
                  Cargo *
                </Label>
                <select
                  id="cargo"
                  name="cargo"
                  required
                  value={formData.cargo}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-lg border bg-[#0A0A0A] border-white/20 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D8B40] focus-visible:ring-offset-2"
                >
                  <option value="" className="bg-[#171717]">
                    Selecione seu cargo
                  </option>
                  <option value="diretor" className="bg-[#171717]">
                    Diretor(a)
                  </option>
                  <option value="coordenador" className="bg-[#171717]">
                    Coordenador(a)
                  </option>
                  <option value="gestor" className="bg-[#171717]">
                    Gestor(a)
                  </option>
                  <option value="outro" className="bg-[#171717]">
                    Outro
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade" className="text-white">
                  Cidade/Estado *
                </Label>
                <Input
                  id="cidade"
                  name="cidade"
                  required
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Ex: São Paulo/SP"
                  className="form-input bg-[#0A0A0A] border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="aceite"
                  checked={aceite}
                  onCheckedChange={(checked) => setAceite(checked as boolean)}
                  className="border-white/40 data-[state=checked]:bg-[#3D8B40] data-[state=checked]:border-[#3D8B40]"
                />
                <Label
                  htmlFor="aceite"
                  className="text-sm text-white/60 leading-relaxed cursor-pointer"
                >
                  Concordo em receber comunicações da SemeIA Educação sobre
                  conteúdos e soluções para minha escola.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full btn-cta-accent mt-6"
                disabled={isSubmitting || !aceite}
              >
                {isSubmitting ? "Enviando..." : "Quero o guia gratuito"}
              </Button>

              <p className="text-center text-xs text-white/40 mt-4">
                Respeitamos sua privacidade. Seus dados estão protegidos
                conforme a LGPD e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 section-card">
        <div className="container mx-auto max-w-2xl">
          <div className="accent-divider mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Perguntas frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0A0A0A] rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold pr-4 text-white">
                    {faq.pergunta}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(122 37% 50%)' }} />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: 'hsl(122 37% 50%)' }} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-white/60">{faq.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 hero-bg-glow">
        <div className="container mx-auto max-w-2xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sua escola merece um plano claro para a IA.
          </h2>
          <a href="#formulario">
            <Button size="lg" className="btn-cta-accent px-10 py-6 text-lg rounded-lg">
              Baixar o guia gratuito agora
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/logo-semeia.png"
              alt="SemeIA Educação"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-white/50 text-sm mb-4">
            Transformando a educação no Brasil através da Inteligência
            Artificial aplicada com propósito, ética e resultados práticos.
          </p>
          <p className="text-white/30 text-xs">
            © 2026 SemeIA Educação. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}
