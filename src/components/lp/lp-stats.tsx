import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPStatItem {
  value: string;
  label: string;
}

export interface LPStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: LPStatItem[];
  columns?: 2 | 3 | 4;
}

const colClasses = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-4",
};

export const LPStats = React.forwardRef<HTMLDivElement, LPStatsProps>(
  ({ className, stats, columns = 4, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("grid gap-4 md:gap-8", colClasses[columns], className)}
        {...props}
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-3 md:p-6">
            <div className="lp-stat-number">{stat.value}</div>
            <div className="lp-stat-label mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    );
  }
);
LPStats.displayName = "LPStats";
