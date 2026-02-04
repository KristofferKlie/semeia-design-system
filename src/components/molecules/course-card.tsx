import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, BookOpen, Play } from "lucide-react";

export interface CourseCardProps {
  /** Course title */
  title: string;
  /** Course description */
  description: string;
  /** Difficulty level */
  difficulty: "beginner" | "intermediate" | "advanced";
  /** Course duration in hours */
  duration: number;
  /** Number of enrolled students */
  students?: number;
  /** Course rating (0-5) */
  rating?: number;
  /** Progress percentage (0-100) */
  progress?: number;
  /** Thumbnail image URL */
  thumbnail?: string;
  /** Course category */
  category?: string;
  /** Number of lessons */
  lessonsCount?: number;
  /** Whether the course is featured */
  featured?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Continue button click handler */
  onContinue?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const difficultyLabels = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
};

/**
 * CourseCard - Card component for displaying course information
 *
 * @example
 * <CourseCard
 *   title="Introdução ao React"
 *   description="Aprenda os fundamentos do React"
 *   difficulty="beginner"
 *   duration={12}
 *   students={2300}
 *   rating={4.8}
 *   progress={45}
 * />
 */
export function CourseCard({
  title,
  description,
  difficulty,
  duration,
  students,
  rating,
  progress,
  thumbnail,
  category,
  lessonsCount,
  featured,
  onClick,
  onContinue,
  className,
}: CourseCardProps) {
  const hasStarted = progress !== undefined && progress > 0;

  return (
    <Card
      interactive
      className={cn(
        "w-full max-w-[320px] overflow-hidden",
        featured && "ring-2 ring-primary",
        className
      )}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "h-40 flex items-center justify-center relative",
          thumbnail ? "bg-cover bg-center" : "bg-gradient-to-br from-primary-400 to-primary-600"
        )}
        style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : undefined}
      >
        {!thumbnail && <BookOpen className="h-16 w-16 text-white opacity-80" />}
        {featured && (
          <Badge variant="xp" className="absolute top-2 right-2">
            <Star className="h-3 w-3 mr-1" />
            Destaque
          </Badge>
        )}
        {hasStarted && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Button size="icon-lg" className="rounded-full">
              <Play className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={difficulty}>{difficultyLabels[difficulty]}</Badge>
          {rating && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-warning text-warning" />
              {rating.toFixed(1)}
            </div>
          )}
        </div>
        {category && (
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </span>
        )}
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}h
          </div>
          {students && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {students >= 1000 ? `${(students / 1000).toFixed(1)}k` : students} alunos
            </div>
          )}
          {lessonsCount && (
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {lessonsCount} aulas
            </div>
          )}
        </div>

        {/* Progress */}
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Progresso</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} variant={progress === 100 ? "success" : "default"} />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          onClick={(e) => {
            e.stopPropagation();
            onContinue?.();
          }}
        >
          {hasStarted ? "Continuar" : "Começar"}
        </Button>
      </CardFooter>
    </Card>
  );
}
