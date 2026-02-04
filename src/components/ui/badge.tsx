import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Badge variants with educational and gamification options
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        // Semantic variants
        success:
          "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning:
          "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        // Educational - Difficulty levels
        beginner:
          "border-transparent bg-educational-beginner text-white hover:bg-educational-beginner/80",
        intermediate:
          "border-transparent bg-educational-intermediate text-black hover:bg-educational-intermediate/80",
        advanced:
          "border-transparent bg-educational-advanced text-white hover:bg-educational-advanced/80",
        // Educational - Content types
        video:
          "border-transparent bg-educational-video text-white hover:bg-educational-video/80",
        reading:
          "border-transparent bg-educational-reading text-white hover:bg-educational-reading/80",
        exercise:
          "border-transparent bg-educational-exercise text-black hover:bg-educational-exercise/80",
        quiz: "border-transparent bg-educational-quiz text-white hover:bg-educational-quiz/80",
        project:
          "border-transparent bg-educational-project text-white hover:bg-educational-project/80",
        // Gamification
        xp: "border-transparent bg-gamification-xp text-black font-bold hover:bg-gamification-xp/80",
        achievement:
          "border-transparent bg-gamification-badge text-white hover:bg-gamification-badge/80",
        streak:
          "border-transparent bg-gamification-streak text-white hover:bg-gamification-streak/80",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /**
   * Optional icon to display before text
   */
  icon?: React.ReactNode;
}

/**
 * Badge component for labels, tags, and status indicators
 *
 * @example
 * // Default badge
 * <Badge>New</Badge>
 *
 * @example
 * // Educational badges
 * <Badge variant="beginner">Iniciante</Badge>
 * <Badge variant="video">Vídeo</Badge>
 *
 * @example
 * // Gamification badges
 * <Badge variant="xp" icon={<StarIcon />}>+50 XP</Badge>
 */
function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
