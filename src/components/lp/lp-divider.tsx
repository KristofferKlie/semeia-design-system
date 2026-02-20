import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "accent";
}

export const LPDivider = React.forwardRef<HTMLDivElement, LPDividerProps>(
  ({ className, variant = "brand", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          variant === "accent" ? "lp-divider-accent" : "lp-divider",
          className
        )}
        {...props}
      />
    );
  }
);
LPDivider.displayName = "LPDivider";
