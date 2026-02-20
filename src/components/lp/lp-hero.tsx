import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPHeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  cta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
  image?: React.ReactNode;
  centered?: boolean;
}

export const LPHero = React.forwardRef<HTMLElement, LPHeroProps>(
  (
    {
      className,
      badge,
      title,
      subtitle,
      cta,
      secondaryCta,
      image,
      centered = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section ref={ref} className={cn("lp-hero", className)} {...props}>
        <div className="lp-hero-content w-full">
          <div className="lp-container">
            <div
              className={cn(
                centered
                  ? "text-center max-w-4xl mx-auto"
                  : "grid md:grid-cols-2 gap-12 items-center"
              )}
            >
              <div className={cn(centered && "flex flex-col items-center")}>
                {badge && (
                  <div className="mb-6">
                    <span className="lp-badge">{badge}</span>
                  </div>
                )}
                <h1 className="lp-h1 mb-6">{title}</h1>
                {subtitle && <p className="lp-text mb-8 max-w-2xl">{subtitle}</p>}
                {(cta || secondaryCta) && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    {cta}
                    {secondaryCta}
                  </div>
                )}
                {children}
              </div>
              {image && !centered && (
                <div className="hidden md:flex justify-center">{image}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);
LPHero.displayName = "LPHero";
