import * as React from "react";
import { cn } from "@/lib/utils";
import { ProgressCard, ProgressCardProps } from "@/components/molecules/progress-card";
import { CourseCard, CourseCardProps } from "@/components/molecules/course-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Bell, Settings, ChevronRight } from "lucide-react";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  earnedAt: string;
  icon?: React.ReactNode;
}

export interface StudentDashboardProps {
  /** Student name */
  studentName: string;
  /** Student avatar URL */
  avatarUrl?: string;
  /** Progress data */
  progress: Omit<ProgressCardProps, "className">;
  /** Courses in progress */
  coursesInProgress: Omit<CourseCardProps, "onClick" | "onContinue">[];
  /** Recent achievements */
  achievements?: Achievement[];
  /** Notification count */
  notificationCount?: number;
  /** Click handlers */
  onCourseClick?: (courseIndex: number) => void;
  onCourseContinue?: (courseIndex: number) => void;
  onViewAllCourses?: () => void;
  onViewAchievements?: () => void;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StudentDashboard - Complete dashboard layout for student home
 *
 * @example
 * <StudentDashboard
 *   studentName="João Silva"
 *   progress={progressData}
 *   coursesInProgress={courses}
 *   achievements={achievements}
 * />
 */
export function StudentDashboard({
  studentName,
  avatarUrl,
  progress,
  coursesInProgress,
  achievements = [],
  notificationCount,
  onCourseClick,
  onCourseContinue,
  onViewAllCourses,
  onViewAchievements,
  onNotificationsClick,
  onSettingsClick,
  className,
}: StudentDashboardProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const initials = studentName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar size="lg">
            {avatarUrl && <AvatarImage src={avatarUrl} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">{getGreeting()},</p>
            <h1 className="text-2xl font-bold">{studentName}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={onNotificationsClick}
          >
            <Bell className="h-5 w-5" />
            {notificationCount && notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={onSettingsClick}>
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Progress Card */}
        <div className="lg:col-span-2">
          <ProgressCard {...progress} />
        </div>

        {/* Recent Achievements */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Conquistas
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onViewAchievements}>
                Ver todas
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {achievements.length > 0 ? (
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-2 rounded-lg bg-muted/50"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-gamification-badge to-purple-600 flex items-center justify-center">
                      {achievement.icon || <Trophy className="h-5 w-5 text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">
                Complete aulas para ganhar conquistas!
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Courses in Progress */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Continuar Estudando</h2>
          <Button variant="ghost" size="sm" onClick={onViewAllCourses}>
            Ver todos
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesInProgress.slice(0, 3).map((course, index) => (
            <CourseCard
              key={index}
              {...course}
              onClick={() => onCourseClick?.(index)}
              onContinue={() => onCourseContinue?.(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
