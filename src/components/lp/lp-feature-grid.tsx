import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface LPFeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  features: LPFeature[];
  columns?: 2 | 3 | 4;
  iconVariant?: "brand" | "accent";
}

const colClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export const LPFeatureGrid = React.forwardRef<HTMLDivElement, LPFeatureGridProps>(
  ({ className, features, columns = 3, iconVariant = "brand", ...props }, ref) => {
    const iconClass = iconVariant === "accent" ? "lp-icon-accent" : "lp-icon";

    return (
      <div
        ref={ref}
        className={cn("grid gap-8", colClasses[columns], className)}
        {...props}
      >
        {features.map((feature, index) => (
          <div key={index} className="lp-card text-center">
            <div className={cn(iconClass, "mx-auto mb-4")}>{feature.icon}</div>
            <h3 className="lp-h3 mb-3">{feature.title}</h3>
            <p className="lp-text text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    );
  }
);
LPFeatureGrid.displayName = "LPFeatureGrid";
