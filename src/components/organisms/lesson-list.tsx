"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { LessonItem, LessonItemProps } from "@/components/molecules/lesson-item";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export interface LessonListProps {
  /** Section title */
  title?: string;
  /** Array of lessons */
  lessons: Omit<LessonItemProps, "onClick">[];
  /** Show section progress */
  showProgress?: boolean;
  /** Click handler for lesson */
  onLessonClick?: (lessonIndex: number) => void;
  /** Collapsible section */
  collapsible?: boolean;
  /** Default collapsed state */
  defaultCollapsed?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * LessonList - List of lessons with optional progress tracking
 *
 * @example
 * <LessonList
 *   title="Módulo 1: Fundamentos"
 *   lessons={lessons}
 *   showProgress
 *   onLessonClick={(i) => openLesson(lessons[i])}
 * />
 */
export function LessonList({
  title,
  lessons,
  showProgress = true,
  onLessonClick,
  collapsible = false,
  defaultCollapsed = false,
  className,
}: LessonListProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

  const completedCount = lessons.filter((l) => l.status === "completed").length;
  const progressPercent = Math.round((completedCount / lessons.length) * 100);

  const totalDuration = lessons.reduce((sum, l) => sum + l.duration, 0);
  const completedDuration = lessons
    .filter((l) => l.status === "completed")
    .reduce((sum, l) => sum + l.duration, 0);

  return (
    <Card className={cn("w-full", className)}>
      {title && (
        <CardHeader
          className={cn(
            "pb-2",
            collapsible && "cursor-pointer hover:bg-accent/50 transition-colors"
          )}
          onClick={collapsible ? () => setCollapsed(!collapsed) : undefined}
        >
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {completedCount}/{lessons.length} aulas · {Math.round(totalDuration / 60)}h{" "}
                {totalDuration % 60}min
              </p>
            </div>
            {collapsible && (
              <svg
                className={cn(
                  "h-5 w-5 transition-transform",
                  collapsed && "-rotate-90"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </div>
          {showProgress && (
            <div className="mt-2">
              <Progress value={progressPercent} variant={progressPercent === 100 ? "success" : "default"} />
            </div>
          )}
        </CardHeader>
      )}
      {!collapsed && (
        <CardContent className={cn(title ? "pt-2" : "pt-6")}>
          <div className="space-y-2">
            {lessons.map((lesson, index) => (
              <LessonItem
                key={index}
                {...lesson}
                onClick={() => onLessonClick?.(index)}
              />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
