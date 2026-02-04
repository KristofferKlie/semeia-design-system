import Link from "next/link";
import { GraduationCap, BookOpen, Layers, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center mb-4">
          <GraduationCap className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-2">SemeIA Design System</h1>
        <p className="text-muted-foreground">Sistema de design para plataforma educacional</p>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
        {/* Landing Page Showcase */}
        <Link
          href="/lp-showcase"
          className="group p-6 rounded-xl border bg-card hover:border-primary hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Landing Showcase</h2>
              <p className="text-sm text-muted-foreground">/lp-showcase</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Visualize todos os componentes do Design System em uma landing page interativa.
          </p>
          <div className="flex items-center text-primary font-medium">
            Ver Showcase
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Storybook */}
        <Link
          href="/storybook"
          className="group p-6 rounded-xl border bg-card hover:border-secondary-500 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-lg bg-secondary-500/10 flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
              <BookOpen className="h-6 w-6 text-secondary-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Storybook</h2>
              <p className="text-sm text-muted-foreground">/storybook</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Documentação completa dos componentes com controles interativos e variantes.
          </p>
          <div className="flex items-center text-secondary-500 font-medium">
            Abrir Storybook
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Version */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>v0.1.0 - SemeIA Educação</p>
        <p className="mt-1">Servidor: http://localhost:3000</p>
      </div>
    </div>
  );
}
