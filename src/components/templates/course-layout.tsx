"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BookOpen, Clock, Users, Star, Share2, Heart } from "lucide-react";

export interface CourseLayoutProps {
  /** Course title */
  courseTitle: string;
  /** Course description */
  courseDescription?: string;
  /** Instructor name */
  instructor?: string;
  /** Difficulty level */
  difficulty?: "beginner" | "intermediate" | "advanced";
  /** Duration in hours */
  duration?: number;
  /** Number of students */
  students?: number;
  /** Course rating */
  rating?: number;
  /** Current progress (0-100) */
  progress?: number;
  /** Back button click handler */
  onBack?: () => void;
  /** Share button click handler */
  onShare?: () => void;
  /** Favorite button click handler */
  onFavorite?: () => void;
  /** Whether course is favorited */
  isFavorited?: boolean;
  /** Sidebar content (lesson list) */
  sidebar?: React.ReactNode;
  /** Main content area */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const difficultyLabels = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado",
};

/**
 * CourseLayout - Layout for course detail and learning pages
 *
 * @example
 * <CourseLayout
 *   courseTitle="Introdução ao React"
 *   progress={45}
 *   sidebar={<LessonList lessons={lessons} />}
 * >
 *   <VideoPlayer src={currentLesson.video} />
 * </CourseLayout>
 */
export function CourseLayout({
  courseTitle,
  courseDescription,
  instructor,
  difficulty,
  duration,
  students,
  rating,
  progress,
  onBack,
  onShare,
  onFavorite,
  isFavorited,
  sidebar,
  children,
  className,
}: CourseLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="hidden sm:block">
              <h1 className="font-semibold truncate max-w-[300px] lg:max-w-[500px]">
                {courseTitle}
              </h1>
              {instructor && (
                <p className="text-sm text-muted-foreground">por {instructor}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {progress !== undefined && (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Progresso</span>
                <div className="w-32">
                  <Progress value={progress} />
                </div>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
            )}
            <Button variant="ghost" size="icon" onClick={onShare}>
              <Share2 className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onFavorite}
              className={cn(isFavorited && "text-destructive")}
            >
              <Heart className={cn("h-5 w-5", isFavorited && "fill-current")} />
            </Button>
          </div>
        </div>

        {/* Mobile progress */}
        {progress !== undefined && (
          <div className="md:hidden px-4 pb-2">
            <Progress value={progress} className="h-1" />
          </div>
        )}
      </header>

      {/* Course info bar */}
      <div className="border-b bg-muted/30">
        <div className="container px-4 py-3">
          <div className="flex flex-wrap items-center gap-3">
            {difficulty && (
              <Badge variant={difficulty}>{difficultyLabels[difficulty]}</Badge>
            )}
            {duration && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {duration}h
              </div>
            )}
            {students && (
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                {students.toLocaleString()} alunos
              </div>
            )}
            {rating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-4 w-4 fill-warning text-warning" />
                {rating.toFixed(1)}
              </div>
            )}
          </div>
          {courseDescription && (
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {courseDescription}
            </p>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex">
        {/* Content area */}
        <main className={cn("flex-1 min-w-0", sidebar && sidebarOpen && "lg:mr-80")}>
          <div className="container py-6 px-4">{children}</div>
        </main>

        {/* Sidebar */}
        {sidebar && (
          <>
            {/* Desktop sidebar */}
            <aside
              className={cn(
                "hidden lg:block fixed right-0 top-[calc(4rem+1px+52px)] w-80 h-[calc(100vh-4rem-1px-52px)] overflow-y-auto border-l bg-card transition-transform",
                !sidebarOpen && "translate-x-full"
              )}
            >
              <div className="p-4">{sidebar}</div>
            </aside>

            {/* Toggle button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 h-12 w-6 items-center justify-center rounded-l-md border border-r-0 bg-card shadow-sm"
            >
              <BookOpen className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
