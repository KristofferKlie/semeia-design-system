import * as React from "react";
import { cn } from "@/lib/utils";

export type LPAccentColor = "primary" | "secondary" | "accent" | "gold" | "blue" | "rosa" | "terra";

export interface LPCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm";
  hoverable?: boolean;
  /** Colored border-top accent — differentiates cards in a grid */
  accent?: LPAccentColor;
}

const accentClasses: Record<LPAccentColor, string> = {
  primary: "lp-card-accent-primary",
  secondary: "lp-card-accent-secondary",
  accent: "lp-card-accent-accent",
  gold: "lp-card-accent-gold",
  blue: "lp-card-accent-blue",
  rosa: "lp-card-accent-rosa",
  terra: "lp-card-accent-terra",
};

export const LPCard = React.forwardRef<HTMLDivElement, LPCardProps>(
  ({ className, size = "default", hoverable = true, accent, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          size === "default" ? "lp-card" : "lp-card-sm",
          !hoverable && "hover:transform-none hover:border-[rgba(255,255,255,0.1)] hover:shadow-none",
          accent && accentClasses[accent],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LPCard.displayName = "LPCard";

export type LPIconVariant = "brand" | "accent" | "secondary" | "blue" | "rosa" | "terra";

export interface LPCardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LPIconVariant;
  size?: "default" | "lg";
}

const iconClasses: Record<LPIconVariant, string> = {
  brand: "lp-icon",
  accent: "lp-icon-accent",
  secondary: "lp-icon-secondary",
  blue: "lp-icon-blue",
  rosa: "lp-icon-rosa",
  terra: "lp-icon-terra",
};

export const LPCardIcon = React.forwardRef<HTMLDivElement, LPCardIconProps>(
  ({ className, variant = "brand", size = "default", children, ...props }, ref) => {
    const baseClass = iconClasses[variant] || "lp-icon";
    const sizeClass = size === "lg" && variant === "brand" ? "lp-icon-lg" : baseClass;

    return (
      <div ref={ref} className={cn(sizeClass, className)} {...props}>
        {children}
      </div>
    );
  }
);
LPCardIcon.displayName = "LPCardIcon";
