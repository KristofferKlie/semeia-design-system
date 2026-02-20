import * as React from "react";
import { cn } from "@/lib/utils";
import type { LPAccentColor, LPIconVariant } from "./lp-card";

export interface LPFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  /** Per-card accent color for border-top differentiation */
  accent?: LPAccentColor;
  /** Per-card icon color variant */
  iconVariant?: LPIconVariant;
}

export interface LPFeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  features: LPFeature[];
  columns?: 2 | 3 | 4;
  /** Default icon variant for all features (overridden by feature.iconVariant) */
  iconVariant?: LPIconVariant;
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

const iconClasses: Record<LPIconVariant, string> = {
  brand: "lp-icon",
  accent: "lp-icon-accent",
  secondary: "lp-icon-secondary",
  blue: "lp-icon-blue",
  rosa: "lp-icon-rosa",
  terra: "lp-icon-terra",
};

const accentClasses: Record<LPAccentColor, string> = {
  primary: "lp-card-accent-primary",
  secondary: "lp-card-accent-secondary",
  accent: "lp-card-accent-accent",
  gold: "lp-card-accent-gold",
  blue: "lp-card-accent-blue",
  rosa: "lp-card-accent-rosa",
  terra: "lp-card-accent-terra",
};

export const LPFeatureGrid = React.forwardRef<HTMLDivElement, LPFeatureGridProps>(
  ({ className, features, columns = 3, iconVariant = "brand", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid gap-8", colClasses[columns], className)}
        {...props}
      >
        {features.map((feature, index) => {
          const featureIconVariant = feature.iconVariant || iconVariant;
          const iconClass = iconClasses[featureIconVariant] || "lp-icon";

          return (
            <div
              key={index}
              className={cn(
                "lp-card text-center",
                feature.accent && accentClasses[feature.accent]
              )}
            >
              <div className={cn(iconClass, "mx-auto mb-4")}>{feature.icon}</div>
              <h3 className="lp-h3 mb-3">{feature.title}</h3>
              <p className="lp-text text-base">{feature.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
);
LPFeatureGrid.displayName = "LPFeatureGrid";
