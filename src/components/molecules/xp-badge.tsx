import * as React from "react";
import { cn } from "@/lib/utils";
import { Star, Zap, Trophy } from "lucide-react";

export interface XPBadgeProps {
  /** XP amount */
  amount: number;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Show + sign */
  showPlus?: boolean;
  /** Animate on render */
  animate?: boolean;
  /** Icon type */
  icon?: "star" | "zap" | "trophy";
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs gap-1",
  md: "px-3 py-1 text-sm gap-1.5",
  lg: "px-4 py-2 text-base gap-2",
};

const iconSizes = {
  sm: "h-3 w-3",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const iconComponents = {
  star: Star,
  zap: Zap,
  trophy: Trophy,
};

/**
 * XPBadge - Specialized badge for displaying XP rewards
 *
 * @example
 * <XPBadge amount={50} />
 * <XPBadge amount={100} size="lg" animate icon="trophy" />
 */
export function XPBadge({
  amount,
  size = "md",
  showPlus = true,
  animate = false,
  icon = "star",
  className,
}: XPBadgeProps) {
  const IconComponent = iconComponents[icon];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-bold",
        "bg-gradient-to-r from-yellow-400 to-amber-500 text-black",
        "shadow-sm",
        sizeClasses[size],
        animate && "animate-bounce",
        className
      )}
    >
      <IconComponent className={cn(iconSizes[size], "fill-current")} />
      <span>
        {showPlus && amount > 0 && "+"}
        {amount.toLocaleString()} XP
      </span>
    </div>
  );
}
