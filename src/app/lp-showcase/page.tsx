"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  BookOpen,
  Play,
  PenTool,
  HelpCircle,
  FolderKanban,
  Star,
  Trophy,
  Flame,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Info,
  Moon,
  Sun,
  Mail,
  ArrowRight,
  Plus,
  Target,
  Zap,
} from "lucide-react";

export default function DesignSystemShowcase() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState(65);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-background text-foreground ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl">SemeIA</h1>
              <p className="text-xs text-muted-foreground">Design System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">v0.1.0</Badge>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="info" className="mb-4">Design System Educacional</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary-500 to-accent bg-clip-text text-transparent">
            SemeIA Design System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sistema de design completo para a plataforma educacional SemeIA.
            Componentes acessíveis, consistentes e prontos para produção.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Componentes
            </Button>
            <a href="/storybook">
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-5 w-5" />
                Storybook
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Paleta de Cores</h2>
          <p className="text-muted-foreground mb-8">Cores pensadas para contexto educacional</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Primary */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Primary - Verde Folha SemeIA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-1 h-16 rounded-lg overflow-hidden">
                  <div className="bg-primary-100" title="100" />
                  <div className="bg-primary-300" title="300" />
                  <div className="bg-primary-500" title="500" />
                  <div className="bg-primary-700" title="700" />
                  <div className="bg-primary-900" title="900" />
                </div>
              </CardContent>
            </Card>

            {/* Secondary */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Secondary - Azul Petróleo SemeIA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-1 h-16 rounded-lg overflow-hidden">
                  <div className="bg-secondary-100" title="100" />
                  <div className="bg-secondary-300" title="300" />
                  <div className="bg-secondary-500" title="500" />
                  <div className="bg-secondary-700" title="700" />
                  <div className="bg-secondary-900" title="900" />
                </div>
              </CardContent>
            </Card>

            {/* Accent */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Accent - Laranja IA SemeIA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-1 h-16 rounded-lg overflow-hidden">
                  <div className="bg-accent-100" title="100" />
                  <div className="bg-accent-300" title="300" />
                  <div className="bg-accent-500" title="500" />
                  <div className="bg-accent-700" title="700" />
                  <div className="bg-accent-900" title="900" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Semantic Colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-success text-success-foreground text-center font-medium">
              Success
            </div>
            <div className="p-4 rounded-lg bg-warning text-warning-foreground text-center font-medium">
              Warning
            </div>
            <div className="p-4 rounded-lg bg-destructive text-destructive-foreground text-center font-medium">
              Destructive
            </div>
            <div className="p-4 rounded-lg bg-info text-info-foreground text-center font-medium">
              Info
            </div>
          </div>

          {/* Disciplinas - Cores dos Assistentes Pedagógicos */}
          <h3 className="text-xl font-semibold mb-4">Cores das Disciplinas (Assistentes Pedagógicos)</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            <div className="p-4 rounded-lg disciplina-geral text-center font-medium">
              Geral
            </div>
            <div className="p-4 rounded-lg disciplina-linguagens text-center font-medium">
              Linguagens
            </div>
            <div className="p-4 rounded-lg disciplina-matematica text-center font-medium">
              Matemática
            </div>
            <div className="p-4 rounded-lg disciplina-humanas text-center font-medium">
              Humanas
            </div>
            <div className="p-4 rounded-lg disciplina-natureza text-center font-medium">
              Natureza
            </div>
            <div className="p-4 rounded-lg disciplina-infantil text-center font-medium">
              Infantil
            </div>
          </div>

          {/* Status Badges */}
          <h3 className="text-xl font-semibold mb-4">Status do Sistema</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-3 rounded-lg status-gerado text-center text-sm font-medium">
              Gerado
            </div>
            <div className="p-3 rounded-lg status-editado text-center text-sm font-medium">
              Editado
            </div>
            <div className="p-3 rounded-lg status-planejado text-center text-sm font-medium">
              Planejado
            </div>
            <div className="p-3 rounded-lg status-aplicado text-center text-sm font-medium">
              Aplicado
            </div>
            <div className="p-3 rounded-lg bg-muted/50 text-muted-foreground text-center text-sm font-medium">
              Cancelado
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Buttons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Buttons</h2>
          <p className="text-muted-foreground mb-8">Variantes para diferentes contextos</p>

          <div className="space-y-8">
            {/* Standard Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Variantes Padrão</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            {/* Semantic Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Variantes Semânticas</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="success">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Concluir
                </Button>
                <Button variant="warning">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Atenção
                </Button>
                <Button variant="info">
                  <Info className="mr-2 h-4 w-4" />
                  Saiba mais
                </Button>
              </div>
            </div>

            {/* Educational Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Gamificação</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="xp">
                  <Star className="mr-2 h-4 w-4" />
                  +100 XP
                </Button>
                <Button variant="achievement">
                  <Trophy className="mr-2 h-4 w-4" />
                  Conquista!
                </Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tamanhos</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
                <Button size="icon"><Plus className="h-4 w-4" /></Button>
              </div>
            </div>

            {/* States */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Estados</h3>
              <div className="flex flex-wrap gap-3">
                <Button loading>Carregando...</Button>
                <Button disabled>Desabilitado</Button>
                <Button leftIcon={<Mail className="h-4 w-4" />}>Com Ícone</Button>
                <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Continuar</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Badges */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Badges</h2>
          <p className="text-muted-foreground mb-8">Labels para categorização e status</p>

          <div className="space-y-8">
            {/* Difficulty Levels */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Níveis de Dificuldade</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="beginner">Iniciante</Badge>
                <Badge variant="intermediate">Intermediário</Badge>
                <Badge variant="advanced">Avançado</Badge>
              </div>
            </div>

            {/* Content Types */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Tipos de Conteúdo</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="video" icon={<Play className="h-3 w-3" />}>Vídeo</Badge>
                <Badge variant="reading" icon={<BookOpen className="h-3 w-3" />}>Leitura</Badge>
                <Badge variant="exercise" icon={<PenTool className="h-3 w-3" />}>Exercício</Badge>
                <Badge variant="quiz" icon={<HelpCircle className="h-3 w-3" />}>Quiz</Badge>
                <Badge variant="project" icon={<FolderKanban className="h-3 w-3" />}>Projeto</Badge>
              </div>
            </div>

            {/* Gamification */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Gamificação</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="xp" icon={<Star className="h-3 w-3" />}>+50 XP</Badge>
                <Badge variant="xp" icon={<Zap className="h-3 w-3" />}>+100 XP</Badge>
                <Badge variant="achievement" icon={<Trophy className="h-3 w-3" />}>Mestre</Badge>
                <Badge variant="streak" icon={<Flame className="h-3 w-3" />}>15 dias</Badge>
              </div>
            </div>

            {/* Status */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Status</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="success">Completo</Badge>
                <Badge variant="warning">Em progresso</Badge>
                <Badge variant="destructive">Erro</Badge>
                <Badge variant="info">Novo</Badge>
                <Badge variant="secondary">Rascunho</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Form Elements */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Formulários</h2>
          <p className="text-muted-foreground mb-8">Inputs e controles de formulário</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="search">Com ícone</Label>
                  <Input
                    id="search"
                    placeholder="Buscar cursos..."
                    leftAddon={<BookOpen className="h-4 w-4" />}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="error">Com erro</Label>
                  <Input
                    id="error"
                    error
                    errorMessage="Este campo é obrigatório"
                    placeholder="Campo inválido"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Textarea</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem..." />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Controles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Aceito os termos de uso</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <Label htmlFor="newsletter">Receber novidades por email</Label>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Notificações</Label>
                  <Switch id="notifications" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkmode">Modo escuro</Label>
                  <Switch id="darkmode" checked={darkMode} onCheckedChange={toggleDarkMode} />
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <Label>Progresso do curso</Label>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
                <div className="space-y-2">
                  <Label>XP Progress</Label>
                  <Progress value={75} variant="xp" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Cards</h2>
          <p className="text-muted-foreground mb-8">Containers para conteúdo agrupado</p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Course Card */}
            <Card interactive className="overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-white opacity-80" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="beginner">Iniciante</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    4.8
                  </div>
                </div>
                <CardTitle className="mt-2">Introdução ao React</CardTitle>
                <CardDescription>
                  Aprenda os fundamentos do React e construa suas primeiras aplicações.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    12h
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    2.3k alunos
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progresso</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Continuar</Button>
              </CardFooter>
            </Card>

            {/* Achievement Card */}
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-2">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <CardTitle>Primeira Conquista!</CardTitle>
                <CardDescription>Você completou sua primeira aula</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="xp" size="lg">+100 XP</Badge>
              </CardContent>
              <CardFooter className="justify-center">
                <Button variant="secondary">Compartilhar</Button>
              </CardFooter>
            </Card>

            {/* Profile Card */}
            <Card>
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <Avatar size="lg">
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>João Silva</CardTitle>
                  <CardDescription>Estudante há 3 meses</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-xs text-muted-foreground">Cursos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">2,450</div>
                    <div className="text-xs text-muted-foreground">XP Total</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">15</div>
                    <div className="text-xs text-muted-foreground">Streak</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" className="flex-1">Ver Perfil</Button>
                <Button className="flex-1">Certificados</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Alerts */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Alerts</h2>
          <p className="text-muted-foreground mb-8">Mensagens de feedback para o usuário</p>

          <div className="space-y-4 max-w-2xl">
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Parabéns!</AlertTitle>
              <AlertDescription>
                Você completou o módulo e ganhou +150 XP.
              </AlertDescription>
            </Alert>
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>
                Seu streak vai expirar em 2 horas. Complete uma aula para mantê-lo!
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>
                Não foi possível carregar o vídeo. Tente novamente.
              </AlertDescription>
            </Alert>
            <Alert variant="info">
              <Info className="h-4 w-4" />
              <AlertTitle>Dica</AlertTitle>
              <AlertDescription>
                Complete 5 aulas seguidas para ganhar o badge &ldquo;Dedicação&rdquo;.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <Separator />

      {/* Tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Tabs</h2>
          <p className="text-muted-foreground mb-8">Navegação por abas</p>

          <Tabs defaultValue="overview" className="max-w-2xl">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="curriculum">Conteúdo</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sobre o Curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Este curso aborda os fundamentos do React, incluindo componentes,
                    props, state e hooks. Ideal para iniciantes em desenvolvimento web.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span className="text-sm">24 aulas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">12 horas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="text-sm">Certificado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="curriculum" className="mt-4">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="h-8 w-8 rounded bg-primary-100 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{i}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Aula {i}: Introdução</p>
                        <p className="text-xs text-muted-foreground">15 minutos</p>
                      </div>
                      <Badge variant="video" size="sm">Vídeo</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl font-bold">4.8</div>
                    <div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i <= 4 ? "fill-warning text-warning" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">2,345 avaliações</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold">SemeIA Design System</h3>
                <p className="text-sm text-muted-foreground">v0.1.0</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <BookOpen className="mr-2 h-4 w-4" />
                Documentação
              </Button>
              <a href="/storybook">
                <Button variant="outline" size="sm">Storybook</Button>
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            Desenvolvido para SemeIA Educação © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
