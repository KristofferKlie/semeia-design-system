"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function LandingPageGuiaIAv2() {
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
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
        <div className="max-w-lg text-center p-8 bg-[#171717] rounded-2xl border border-white/10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-[#3D8B40]">
            <CheckCircle2 className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Parabéns por dar o primeiro passo!
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8">
            O guia foi enviado para seu e-mail. Enquanto isso, que tal conhecer
            como a SemeIA pode ajudar sua escola a ir ainda mais longe?
          </p>
          <div className="space-y-4">
            <a href="https://semeiaeducacao.ia.br" className="block">
              <button className="w-full rounded-lg bg-[#3D8B40] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#357a38] hover:shadow-lg">
                Conhecer a Formação de Professores
              </button>
            </a>
            <a href="https://assistente.semeiaeducacao.ia.br" className="block">
              <button className="w-full rounded-lg border-2 border-[#3D8B40] bg-transparent px-10 py-4 text-lg font-semibold text-[#4ade80] transition-all duration-200 hover:bg-[#3D8B40] hover:text-white">
                Conhecer o Assistente Pedagógico
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-['Montserrat',system-ui,sans-serif]">
      {/* Header - h-20 (80px), logo h-16 (64px) */}
      <header className="glass-header fixed top-0 left-0 right-0 z-50 h-20">
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="https://semeiaeducacao.ia.br" className="flex items-center">
            <Image
              src="/images/logo-semeia-white.png"
              alt="SemeIA Educação"
              width={200}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </a>
          <a href="#formulario">
            <button className="rounded-lg bg-[#3D8B40] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#357a38] hover:shadow-lg">
              Baixar Guia
            </button>
          </a>
        </div>
      </header>

      {/* Hero - min-h-screen, pt-20, py-24 */}
      <section className="hero-bg-glow min-h-screen pt-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/20 text-white mb-6">
                Material 100% gratuito
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-gradient">Sua escola está pronta</span>
                <br />
                para a IA?
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-xl">
                Baixe o guia gratuito que mostra como implementar Inteligência
                Artificial de forma ética, prática e segura na sua instituição.
              </p>
              <a href="#formulario">
                <button className="rounded-lg bg-[#3D8B40] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#357a38] hover:shadow-lg hover:shadow-[#3D8B40]/25">
                  Quero o guia gratuito
                </button>
              </a>
              <p className="text-sm text-neutral-500 mt-4">
                Mais de 200 gestores já baixaram este material
              </p>
            </div>
            <div className="hidden lg:block animate-slide-up">
              <div className="bg-[#171717] border border-white/10 rounded-xl p-8 text-center transform rotate-3 hover:rotate-0 transition-all duration-500 hover:-translate-y-2 hover:border-[#3D8B40]/50 hover:shadow-2xl">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#3D8B40]/10">
                  <BookOpen className="h-8 w-8 text-[#4ade80]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Guia de Implementação de IA na Escola
                </h3>
                <p className="text-sm text-neutral-500">SemeIA Educação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema - py-24 */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="accent-divider mb-8"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O dilema que toda escola enfrenta hoje
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-8">
            Professores sobrecarregados. Pais exigindo inovação. Estudantes
            usando IA sem orientação. E você, gestor, no meio de tudo isso
            tentando tomar a melhor decisão.
          </p>
          <p className="text-lg md:text-xl text-white font-medium mb-12">
            A verdade é que a IA já chegou na sua escola, quer você tenha
            planejado ou não. A pergunta não é mais &quot;se&quot; implementar,
            mas &quot;como&quot; fazer isso da forma certa.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              "Professores perdendo horas com tarefas que a IA poderia apoiar",
              "Falta de diretrizes claras sobre uso de IA por estudantes",
              "Preocupações com plágio e integridade acadêmica",
              "Dúvidas sobre LGPD e privacidade de dados",
              "Pressão por modernização sem saber por onde começar",
            ].map((dor, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-[#171717] border border-white/10"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold bg-[#3D8B40]/20 text-[#4ade80]">
                  {index + 1}
                </div>
                <p className="text-base text-neutral-400">{dor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução - py-24 */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="accent-divider mb-8"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Um guia feito por quem vive a realidade da educação brasileira
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
              Este não é mais um material genérico traduzido de outro país. O
              Guia de Implementação de IA na Escola foi desenvolvido pela SemeIA
              Educação, com base em 30 anos de experiência em educação.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-white text-center mb-8">
            O que você vai encontrar:
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conteudos.map((item, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#3D8B40]/50 hover:shadow-2xl"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#3D8B40]/10">
                  <span className="text-[#4ade80]">{item.icon}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.titulo}</h4>
                <p className="text-base text-neutral-400">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios - py-24 */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <div className="accent-divider mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            O que muda na sua escola com este guia
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-white/10 rounded-xl p-8 flex gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#3D8B40]/50 hover:shadow-2xl"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#3D8B40]/10">
                  <span className="text-[#4ade80]">{beneficio.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {beneficio.titulo}
                  </h3>
                  <p className="text-base text-neutral-400">{beneficio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibilidade - py-24 fundo escuro */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Quem está por trás deste material
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            A SemeIA Educação nasceu da união entre pedagogia profunda e
            tecnologia aplicada. Nossa fundadora, com mais de 30 anos de sala de
            aula, desenvolveu o conceito de &quot;Professor Expandido&quot;: o
            educador que usa IA para ampliar seu impacto, não para ser
            substituído.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { numero: "30+", texto: "anos de experiência" },
              { numero: "80+", texto: "prompts testados" },
              { numero: "200+", texto: "professores formados" },
              { numero: "100%", texto: "contexto brasileiro" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">
                  {stat.numero}
                </div>
                <div className="text-sm text-white/70">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário - py-24 */}
      <section id="formulario" className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-xl mx-auto">
          <div className="accent-divider mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Baixe agora o guia gratuito
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 text-center mb-8">
            Preencha os campos abaixo e receba o material completo no seu
            e-mail.
          </p>

          <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-white mb-2">
                  Nome completo *
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white placeholder:text-neutral-500 transition-all duration-200 focus:outline-none focus:border-[#3D8B40] focus:ring-1 focus:ring-[#3D8B40]/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-mail profissional *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white placeholder:text-neutral-500 transition-all duration-200 focus:outline-none focus:border-[#3D8B40] focus:ring-1 focus:ring-[#3D8B40]/20"
                />
              </div>

              <div>
                <label htmlFor="escola" className="block text-sm font-medium text-white mb-2">
                  Nome da escola *
                </label>
                <input
                  id="escola"
                  name="escola"
                  required
                  value={formData.escola}
                  onChange={handleChange}
                  placeholder="Nome da sua escola"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white placeholder:text-neutral-500 transition-all duration-200 focus:outline-none focus:border-[#3D8B40] focus:ring-1 focus:ring-[#3D8B40]/20"
                />
              </div>

              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-white mb-2">
                  Cargo *
                </label>
                <select
                  id="cargo"
                  name="cargo"
                  required
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white transition-all duration-200 focus:outline-none focus:border-[#3D8B40] focus:ring-1 focus:ring-[#3D8B40]/20"
                >
                  <option value="">Selecione seu cargo</option>
                  <option value="diretor">Diretor(a)</option>
                  <option value="coordenador">Coordenador(a)</option>
                  <option value="gestor">Gestor(a)</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="cidade" className="block text-sm font-medium text-white mb-2">
                  Cidade/Estado *
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  required
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Ex: São Paulo/SP"
                  className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-white/10 text-white placeholder:text-neutral-500 transition-all duration-200 focus:outline-none focus:border-[#3D8B40] focus:ring-1 focus:ring-[#3D8B40]/20"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="aceite"
                  checked={aceite}
                  onChange={(e) => setAceite(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded accent-[#3D8B40]"
                />
                <label htmlFor="aceite" className="text-sm text-neutral-400 leading-relaxed cursor-pointer">
                  Concordo em receber comunicações da SemeIA Educação sobre
                  conteúdos e soluções para minha escola.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !aceite}
                className="w-full rounded-lg bg-[#3D8B40] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#357a38] hover:shadow-lg hover:shadow-[#3D8B40]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none mt-4"
              >
                {isSubmitting ? "Enviando..." : "Quero o guia gratuito"}
              </button>

              <p className="text-center text-xs text-neutral-500 mt-4">
                Respeitamos sua privacidade. Seus dados estão protegidos
                conforme a LGPD e não serão compartilhados.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ - py-24 */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto">
          <div className="accent-divider mb-8 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#171717] border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left text-white transition-colors duration-200 hover:bg-white/5"
                >
                  <span className="font-semibold pr-4">{faq.pergunta}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0 text-[#4ade80]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0 text-[#4ade80]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-neutral-400">{faq.resposta}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA - py-24 fundo escuro */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sua escola merece um plano claro para a IA.
          </h2>
          <a href="#formulario">
            <button className="rounded-lg bg-[#3D8B40] px-10 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#357a38] hover:shadow-lg hover:shadow-[#3D8B40]/25">
              Baixar o guia gratuito agora
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/images/logo-semeia-white.png"
              alt="SemeIA Educação"
              width={180}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <p className="text-base text-neutral-400 mb-4">
            Transformando a educação no Brasil através da Inteligência
            Artificial aplicada com propósito, ética e resultados práticos.
          </p>
          <p className="text-xs text-neutral-500">
            © 2026 SemeIA Educação. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button - w-14 h-14 (56px) */}
      <a
        href="https://wa.me/5551981470945"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
