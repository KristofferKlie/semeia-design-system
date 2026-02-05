# SemeIA Design System

Sistema de design oficial para a plataforma educacional **SemeIA Educação**.

## 🎯 Visão Geral

O SemeIA Design System é uma biblioteca de componentes React construída com:

- **React 18** - Componentes modernos com hooks
- **Tailwind CSS** - Estilização utility-first
- **Shadcn/ui** - Componentes acessíveis baseados em Radix UI
- **TypeScript** - Tipagem estática completa

## 📦 Instalação em Outros Projetos

### Via GitHub

```bash
# Instalar diretamente do GitHub
npm install github:KristofferKlie/semeia-design-system

# Ou com yarn
yarn add github:KristofferKlie/semeia-design-system
```

### Configuração no Projeto

1. **Importar os estilos globais** no seu `app/layout.tsx` ou `_app.tsx`:

```tsx
import "@semeia/design-system/styles";
```

2. **Estender o Tailwind config** no seu `tailwind.config.ts`:

```ts
import semeiaConfig from "@semeia/design-system/tailwind.config";

export default {
  ...semeiaConfig,
  content: [
    ...semeiaConfig.content,
    "./node_modules/@semeia/design-system/src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
```

3. **Usar os componentes**:

```tsx
import { Button, Badge, Card } from "@semeia/design-system";

function MyComponent() {
  return (
    <Card>
      <Button variant="success">Concluir</Button>
      <Badge variant="xp">+100 XP</Badge>
    </Card>
  );
}
```

## 🚀 Desenvolvimento Local

```bash
# Clonar o repositório
git clone https://github.com/KristofferKlie/semeia-design-system.git
cd semeia-design-system

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Iniciar Storybook
npm run storybook
```

### Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor Next.js em modo de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run storybook` | Inicia Storybook na porta 6006 |
| `npm run build-storybook` | Compila Storybook para deploy |
| `npm run lint` | Executa ESLint |
| `npm run typecheck` | Verifica tipos TypeScript |

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                 # Componentes base (Shadcn)
│   ├── atoms/              # Blocos básicos
│   ├── molecules/          # Combinações de átomos
│   ├── organisms/          # Componentes complexos
│   └── templates/          # Layouts de página
├── lib/                    # Utilitários
├── styles/                 # CSS global e tokens
├── tokens/                 # Design tokens (YAML)
└── stories/                # Documentação Storybook
```

## 🎨 Design Tokens

### Cores da Marca SemeIA

| Token | Cor | HSL | Uso |
|-------|-----|-----|-----|
| **Primary** | Verde Folha | `#3D8B40` (122 37% 40%) | CTAs, botões principais, ações |
| **Secondary** | Azul Petróleo | `#1E3D4F` (201 45% 21%) | Títulos, texto principal |
| **Accent** | Laranja IA | `#E8941A` (36 84% 51%) | Destaques, alertas, conexões |

### Temas

- **Light Mode**: Fundo bege suave `#F5F3EE`, cards brancos
- **Dark Mode**: Fundo escuro `#0A0A0A`, azul como cor primária

### Cores Educacionais

- **Disciplinas**: Geral, Linguagens, Matemática, Humanas, Natureza, Infantil
- **Status**: Gerado, Editado, Planejado, Aplicado, Cancelado
- **Conteúdo**: Vídeo, Leitura, Exercício, Quiz, Projeto
- **Gamificação**: XP (dourado), Conquistas (roxo), Streak (laranja)

## 🧩 Componentes

### Átomos
- Button, Badge, Input, Label, Checkbox, Switch, Avatar, Progress

### Moléculas
- Card, Alert, Dialog, Tabs, Tooltip
- **Educacionais**: CourseCard, LessonItem, ProgressCard, XPBadge

### Organismos
- CourseGrid, LessonList, StudentDashboard

### Templates
- DashboardLayout, CourseLayout

## 📖 Uso

```tsx
import { Button, Badge, CourseCard } from "@/components";

function MyCourseList() {
  return (
    <div>
      <CourseCard
        title="Introdução ao React"
        description="Aprenda os fundamentos do React"
        difficulty="beginner"
        duration={12}
        progress={45}
        onContinue={() => console.log("Continue")}
      />
    </div>
  );
}
```

## 🎮 Componentes Educacionais

### CourseCard

```tsx
<CourseCard
  title="Nome do Curso"
  description="Descrição"
  difficulty="beginner"
  duration={10}
  students={1500}
  rating={4.8}
  progress={30}
/>
```

### LessonItem

```tsx
<LessonItem
  number={1}
  title="Título da Aula"
  type="video"
  duration={15}
  status="completed"
  xpReward={50}
/>
```

### ProgressCard

```tsx
<ProgressCard
  currentXP={2450}
  nextLevelXP={3000}
  level={5}
  streak={15}
  coursesInProgress={3}
  coursesCompleted={12}
/>
```

## 🌙 Dark Mode

O sistema suporta dark mode automaticamente. Adicione a classe `dark` ao elemento `html`:

```tsx
<html className="dark">
```

## ♿ Acessibilidade

Todos os componentes seguem as diretrizes WCAG 2.1 AA:

- Navegação por teclado
- Leitores de tela (ARIA labels)
- Contraste de cores adequado
- Estados de foco visíveis

## 📚 Storybook

Acesse a documentação visual:

```bash
npm run storybook
```

Navegue por:
- **Introduction** - Visão geral do Design System
- **Design Tokens/Colors** - Paleta de cores
- **UI/** - Componentes primitivos
- **Educational/** - Componentes específicos para educação

## 🔧 Configuração

### tailwind.config.ts

Cores, tipografia e animações customizadas para o contexto educacional.

### components.json

Configuração do Shadcn/ui para adicionar novos componentes:

```bash
npx shadcn@latest add [component]
```

## 📦 Deploy

### Storybook

```bash
npm run build-storybook
# Output em storybook-static/
```

### Aplicação

```bash
npm run build
npm start
```

---

**SemeIA Design System** v0.1.0
Desenvolvido para SemeIA Educação
