import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "tertiary" | "card";
  size?: "default" | "sm";
  container?: boolean;
  /** Enable light mode for this section and all children */
  light?: boolean;
}

const bgMap = {
  primary: "lp-bg-primary",
  secondary: "lp-bg-secondary",
  tertiary: "lp-bg-tertiary",
  card: "lp-bg-card",
};

export const LPSection = React.forwardRef<HTMLDivElement, LPSectionProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      container = true,
      light = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref as React.Ref<HTMLElement>}
        className={cn(
          bgMap[variant],
          size === "default" ? "lp-section" : "lp-section-sm",
          light && "lp-light",
          className
        )}
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        {container ? (
          <div className="lp-container">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);
LPSection.displayName = "LPSection";
