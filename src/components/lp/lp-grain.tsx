import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPGrainProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glow variant: brand green, accent orange, blue, or none */
  glow?: "brand" | "accent" | "blue" | false;
}

export const LPGrain = React.forwardRef<HTMLDivElement, LPGrainProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "lp-grain",
          glow === "brand" && "lp-glow",
          glow === "accent" && "lp-glow lp-glow-accent",
          glow === "blue" && "lp-glow lp-glow-blue",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LPGrain.displayName = "LPGrain";
