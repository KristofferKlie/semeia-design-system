import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const variantClasses = {
  primary: "lp-btn",
  outline: "lp-btn-outline",
  accent: "lp-btn-accent",
};

const sizeClasses = {
  sm: "lp-btn-sm",
  md: "lp-btn-md",
  lg: "lp-btn-lg",
};

export const LPButton = React.forwardRef<HTMLButtonElement, LPButtonProps>(
  (
    { className, variant = "primary", size = "md", href, children, ...props },
    ref
  ) => {
    const classes = cn(variantClasses[variant], sizeClasses[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
LPButton.displayName = "LPButton";
