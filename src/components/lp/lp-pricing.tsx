import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPPricingProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  cta?: React.ReactNode;
  featured?: boolean;
  badge?: string;
}

export const LPPricing = React.forwardRef<HTMLDivElement, LPPricingProps>(
  (
    {
      className,
      name,
      price,
      period = "/mês",
      description,
      features,
      cta,
      featured = false,
      badge,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "lp-card relative flex flex-col",
          featured && "border-[#3D8B40] shadow-brand-card",
          className
        )}
        {...props}
      >
        {badge && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="lp-badge text-xs">{badge}</span>
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
          {description && (
            <p className="text-sm text-neutral-500">{description}</p>
          )}
        </div>
        <div className="mb-6">
          <span className="lp-stat-number text-3xl">{price}</span>
          <span className="text-neutral-500 ml-1">{period}</span>
        </div>
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-neutral-300">{feature}</span>
            </li>
          ))}
        </ul>
        {cta}
      </div>
    );
  }
);
LPPricing.displayName = "LPPricing";
