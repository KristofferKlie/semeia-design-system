import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { Star, Trophy, Flame, Play, BookOpen, PenTool, HelpCircle, FolderKanban } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "destructive",
        "outline",
        "success",
        "warning",
        "info",
        "beginner",
        "intermediate",
        "advanced",
        "video",
        "reading",
        "exercise",
        "quiz",
        "project",
        "xp",
        "achievement",
        "streak",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Default
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

// Status Badges
export const Success: Story = {
  args: {
    children: "Completo",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Em progresso",
    variant: "warning",
  },
};

export const Destructive: Story = {
  args: {
    children: "Erro",
    variant: "destructive",
  },
};

// Difficulty Levels
export const Beginner: Story = {
  args: {
    children: "Iniciante",
    variant: "beginner",
  },
};

export const Intermediate: Story = {
  args: {
    children: "Intermediário",
    variant: "intermediate",
  },
};

export const Advanced: Story = {
  args: {
    children: "Avançado",
    variant: "advanced",
  },
};

// Content Types
export const Video: Story = {
  args: {
    children: "Vídeo",
    variant: "video",
    icon: <Play className="h-3 w-3" />,
  },
};

export const Reading: Story = {
  args: {
    children: "Leitura",
    variant: "reading",
    icon: <BookOpen className="h-3 w-3" />,
  },
};

export const Exercise: Story = {
  args: {
    children: "Exercício",
    variant: "exercise",
    icon: <PenTool className="h-3 w-3" />,
  },
};

export const Quiz: Story = {
  args: {
    children: "Quiz",
    variant: "quiz",
    icon: <HelpCircle className="h-3 w-3" />,
  },
};

export const Project: Story = {
  args: {
    children: "Projeto",
    variant: "project",
    icon: <FolderKanban className="h-3 w-3" />,
  },
};

// Gamification
export const XP: Story = {
  args: {
    children: "+50 XP",
    variant: "xp",
    icon: <Star className="h-3 w-3" />,
  },
};

export const Achievement: Story = {
  args: {
    children: "Primeira Aula",
    variant: "achievement",
    icon: <Trophy className="h-3 w-3" />,
  },
};

export const Streak: Story = {
  args: {
    children: "7 dias",
    variant: "streak",
    icon: <Flame className="h-3 w-3" />,
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Badge",
    size: "lg",
  },
};

// Educational Context
export const DifficultyLevels: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="beginner">Iniciante</Badge>
      <Badge variant="intermediate">Intermediário</Badge>
      <Badge variant="advanced">Avançado</Badge>
    </div>
  ),
};

export const ContentTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="video" icon={<Play className="h-3 w-3" />}>Vídeo</Badge>
      <Badge variant="reading" icon={<BookOpen className="h-3 w-3" />}>Leitura</Badge>
      <Badge variant="exercise" icon={<PenTool className="h-3 w-3" />}>Exercício</Badge>
      <Badge variant="quiz" icon={<HelpCircle className="h-3 w-3" />}>Quiz</Badge>
      <Badge variant="project" icon={<FolderKanban className="h-3 w-3" />}>Projeto</Badge>
    </div>
  ),
};

export const GamificationBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="xp" icon={<Star className="h-3 w-3" />}>+100 XP</Badge>
      <Badge variant="achievement" icon={<Trophy className="h-3 w-3" />}>Mestre</Badge>
      <Badge variant="streak" icon={<Flame className="h-3 w-3" />}>15 dias</Badge>
    </div>
  ),
};
