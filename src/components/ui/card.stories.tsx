import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Progress } from "./progress";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { BookOpen, Clock, Star, Users } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    interactive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default Card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with any elements you need.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

// Interactive Card
export const Interactive: Story = {
  render: () => (
    <Card interactive className="w-[350px]">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover over me to see the effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has hover effects and is clickable.</p>
      </CardContent>
    </Card>
  ),
};

// Course Card (Educational)
export const CourseCard: Story = {
  render: () => (
    <Card interactive className="w-[320px] overflow-hidden">
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
  ),
};

// Lesson Card
export const LessonCard: Story = {
  render: () => (
    <Card interactive className="w-[400px]">
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
          <span className="text-xl font-bold text-primary">01</span>
        </div>
        <div className="flex-1">
          <CardTitle className="text-base">Configurando o Ambiente</CardTitle>
          <CardDescription>Node.js, npm e create-react-app</CardDescription>
        </div>
        <Badge variant="success">Completo</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Badge variant="video" size="sm">Vídeo 15min</Badge>
          <Badge variant="exercise" size="sm">2 Exercícios</Badge>
        </div>
      </CardContent>
    </Card>
  ),
};

// Achievement Card
export const AchievementCard: Story = {
  render: () => (
    <Card className="w-[300px] text-center">
      <CardHeader>
        <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gamification-badge to-purple-600 flex items-center justify-center mb-2">
          <Star className="h-10 w-10 text-white" />
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
  ),
};

// Student Profile Card
export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
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
            <div className="text-xs text-muted-foreground">Dias Streak</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="flex-1">Ver Perfil</Button>
        <Button className="flex-1">Certificados</Button>
      </CardFooter>
    </Card>
  ),
};
