import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "accent" | "white" | "secondary";
}

const variantClasses = {
  brand: "lp-badge",
  accent: "lp-badge-accent",
  white: "lp-badge-white",
  secondary: "lp-badge-secondary",
};

export const LPBadge = React.forwardRef<HTMLSpanElement, LPBadgeProps>(
  ({ className, variant = "brand", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(variantClasses[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
LPBadge.displayName = "LPBadge";
