"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { CourseCard, CourseCardProps } from "@/components/molecules/course-card";

export interface CourseGridProps {
  /** Array of courses to display */
  courses: Omit<CourseCardProps, "onClick" | "onContinue">[];
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  /** Click handler for course card */
  onCourseClick?: (courseIndex: number) => void;
  /** Continue button click handler */
  onCourseContinue?: (courseIndex: number) => void;
  /** Loading state */
  loading?: boolean;
  /** Number of skeleton cards to show when loading */
  skeletonCount?: number;
  /** Empty state message */
  emptyMessage?: string;
  /** Additional CSS classes */
  className?: string;
}

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

/**
 * CourseGrid - Grid layout for displaying multiple course cards
 *
 * @example
 * <CourseGrid
 *   courses={courses}
 *   columns={3}
 *   onCourseClick={(i) => navigate(`/course/${courses[i].id}`)}
 * />
 */
export function CourseGrid({
  courses,
  columns = 3,
  onCourseClick,
  onCourseContinue,
  loading = false,
  skeletonCount = 6,
  emptyMessage = "Nenhum curso encontrado",
  className,
}: CourseGridProps) {
  if (loading) {
    return (
      <div className={cn("grid gap-6 grid-cols-1", columnClasses[columns], className)}>
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div
            key={i}
            className="h-[380px] rounded-xl bg-muted animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 grid-cols-1", columnClasses[columns], className)}>
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          {...course}
          onClick={() => onCourseClick?.(index)}
          onContinue={() => onCourseContinue?.(index)}
          className="justify-self-center"
        />
      ))}
    </div>
  );
}
