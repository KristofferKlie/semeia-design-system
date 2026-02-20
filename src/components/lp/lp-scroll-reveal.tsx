"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation direction */
  direction?: "up" | "left" | "right" | "scale";
  /** Delay in ms (0-600, steps of 100) */
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** Only animate once */
  once?: boolean;
}

const directionClasses = {
  up: "lp-reveal",
  left: "lp-reveal-left",
  right: "lp-reveal-right",
  scale: "lp-reveal-scale",
};

const delayClasses: Record<number, string> = {
  0: "",
  100: "lp-delay-1",
  200: "lp-delay-2",
  300: "lp-delay-3",
  400: "lp-delay-4",
  500: "lp-delay-5",
  600: "lp-delay-6",
};

export const LPScrollReveal = React.forwardRef<HTMLDivElement, LPScrollRevealProps>(
  (
    {
      className,
      direction = "up",
      delay = 0,
      threshold = 0.1,
      once = true,
      children,
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = React.useState(false);

    React.useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setRevealed(false);
          }
        },
        { threshold }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, [threshold, once]);

    return (
      <div
        ref={(node) => {
          (innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(
          directionClasses[direction],
          delayClasses[delay] || "",
          revealed && "revealed",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LPScrollReveal.displayName = "LPScrollReveal";
