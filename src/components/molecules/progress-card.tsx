import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Flame, BookOpen, Clock, CheckCircle2 } from "lucide-react";

export interface ProgressCardProps {
  /** Card title */
  title?: string;
  /** Current XP */
  currentXP: number;
  /** XP needed for next level */
  nextLevelXP: number;
  /** Current level */
  level: number;
  /** Current streak in days */
  streak?: number;
  /** Courses in progress */
  coursesInProgress?: number;
  /** Completed courses */
  coursesCompleted?: number;
  /** Total study time in hours */
  totalHours?: number;
  /** Show detailed stats */
  showStats?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * ProgressCard - Dashboard card showing user progress and stats
 *
 * @example
 * <ProgressCard
 *   currentXP={2450}
 *   nextLevelXP={3000}
 *   level={5}
 *   streak={15}
 *   coursesInProgress={3}
 *   coursesCompleted={12}
 *   showStats
 * />
 */
export function ProgressCard({
  title = "Seu Progresso",
  currentXP,
  nextLevelXP,
  level,
  streak,
  coursesInProgress,
  coursesCompleted,
  totalHours,
  showStats = true,
  className,
}: ProgressCardProps) {
  const progressPercent = Math.round((currentXP / nextLevelXP) * 100);
  const xpToNextLevel = nextLevelXP - currentXP;

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {streak && streak > 0 && (
            <Badge variant="streak" className="gap-1">
              <Flame className="h-3 w-3" />
              {streak} dias
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Level Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{level}</span>
              </div>
              <div>
                <p className="font-medium">Nível {level}</p>
                <p className="text-sm text-muted-foreground">
                  {xpToNextLevel.toLocaleString()} XP para o próximo nível
                </p>
              </div>
            </div>
            <Badge variant="xp" size="lg">
              {currentXP.toLocaleString()} XP
            </Badge>
          </div>
          <Progress value={progressPercent} variant="xp" />
        </div>

        {/* Stats Grid */}
        {showStats && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {coursesInProgress !== undefined && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Target className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xl font-bold">{coursesInProgress}</p>
                  <p className="text-xs text-muted-foreground">Em andamento</p>
                </div>
              </div>
            )}
            {coursesCompleted !== undefined && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <div>
                  <p className="text-xl font-bold">{coursesCompleted}</p>
                  <p className="text-xs text-muted-foreground">Concluídos</p>
                </div>
              </div>
            )}
            {totalHours !== undefined && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Clock className="h-5 w-5 text-info" />
                <div>
                  <p className="text-xl font-bold">{totalHours}h</p>
                  <p className="text-xs text-muted-foreground">Estudadas</p>
                </div>
              </div>
            )}
            {streak !== undefined && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Flame className="h-5 w-5 text-warning" />
                <div>
                  <p className="text-xl font-bold">{streak}</p>
                  <p className="text-xs text-muted-foreground">Dias seguidos</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
