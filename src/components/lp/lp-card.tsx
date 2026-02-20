import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPCardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm";
  hoverable?: boolean;
}

export const LPCard = React.forwardRef<HTMLDivElement, LPCardProps>(
  ({ className, size = "default", hoverable = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          size === "default" ? "lp-card" : "lp-card-sm",
          !hoverable && "hover:transform-none hover:border-[rgba(255,255,255,0.1)] hover:shadow-none",
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

export interface LPCardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "accent";
  size?: "default" | "lg";
}

export const LPCardIcon = React.forwardRef<HTMLDivElement, LPCardIconProps>(
  ({ className, variant = "brand", size = "default", children, ...props }, ref) => {
    const iconClass =
      variant === "accent"
        ? "lp-icon-accent"
        : size === "lg"
          ? "lp-icon-lg"
          : "lp-icon";

    return (
      <div ref={ref} className={cn(iconClass, className)} {...props}>
        {children}
      </div>
    );
  }
);
LPCardIcon.displayName = "LPCardIcon";
