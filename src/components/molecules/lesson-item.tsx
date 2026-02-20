"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Play, BookOpen, PenTool, HelpCircle, FolderKanban, Lock, CheckCircle2 } from "lucide-react";

export type LessonType = "video" | "reading" | "exercise" | "quiz" | "project";
export type LessonStatus = "locked" | "available" | "in_progress" | "completed";

export interface LessonItemProps {
  /** Lesson number */
  number: number;
  /** Lesson title */
  title: string;
  /** Lesson description */
  description?: string;
  /** Type of lesson content */
  type: LessonType;
  /** Duration in minutes */
  duration: number;
  /** Current status */
  status: LessonStatus;
  /** XP reward for completion */
  xpReward?: number;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const typeConfig: Record<LessonType, { icon: React.ElementType; label: string; variant: "video" | "reading" | "exercise" | "quiz" | "project" }> = {
  video: { icon: Play, label: "Vídeo", variant: "video" },
  reading: { icon: BookOpen, label: "Leitura", variant: "reading" },
  exercise: { icon: PenTool, label: "Exercício", variant: "exercise" },
  quiz: { icon: HelpCircle, label: "Quiz", variant: "quiz" },
  project: { icon: FolderKanban, label: "Projeto", variant: "project" },
};

const statusConfig: Record<LessonStatus, { color: string; interactive: boolean }> = {
  locked: { color: "opacity-50", interactive: false },
  available: { color: "", interactive: true },
  in_progress: { color: "border-primary bg-primary/5", interactive: true },
  completed: { color: "border-success bg-success/5", interactive: true },
};

/**
 * LessonItem - Individual lesson row for course content lists
 *
 * @example
 * <LessonItem
 *   number={1}
 *   title="Configurando o Ambiente"
 *   description="Node.js, npm e create-react-app"
 *   type="video"
 *   duration={15}
 *   status="completed"
 *   xpReward={50}
 * />
 */
export function LessonItem({
  number,
  title,
  description,
  type,
  duration,
  status,
  xpReward,
  onClick,
  className,
}: LessonItemProps) {
  const { icon: TypeIcon, label: typeLabel, variant: typeVariant } = typeConfig[type];
  const { color: statusColor, interactive } = statusConfig[status];

  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-lg border transition-colors",
        statusColor,
        interactive && "hover:bg-accent/50 cursor-pointer",
        className
      )}
      onClick={interactive ? onClick : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
    >
      {/* Number/Status indicator */}
      <div className="flex-shrink-0">
        {status === "completed" ? (
          <div className="h-10 w-10 rounded-full bg-success flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
        ) : status === "locked" ? (
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
            <Lock className="h-5 w-5 text-muted-foreground" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
            <span className="text-lg font-bold text-primary">
              {String(number).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className={cn("font-medium truncate", status === "locked" && "text-muted-foreground")}>
            {title}
          </h4>
          {status === "in_progress" && (
            <Badge variant="warning" size="sm">Em andamento</Badge>
          )}
        </div>
        {description && (
          <p className="text-sm text-muted-foreground truncate">{description}</p>
        )}
      </div>

      {/* Meta info */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Badge variant={typeVariant} size="sm">
          <TypeIcon className="h-3 w-3 mr-1" />
          {duration}min
        </Badge>
        {xpReward && status !== "completed" && (
          <Badge variant="xp" size="sm">+{xpReward} XP</Badge>
        )}
      </div>
    </div>
  );
}
