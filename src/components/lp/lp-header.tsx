import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPNavItem {
  label: string;
  href: string;
}

export interface LPHeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: LPNavItem[];
  cta?: React.ReactNode;
}

export const LPHeader = React.forwardRef<HTMLElement, LPHeaderProps>(
  ({ className, logo, navItems = [], cta, ...props }, ref) => {
    return (
      <header ref={ref} className={cn("lp-header", className)} {...props}>
        <div className="lp-header-content">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          {navItems.length > 0 && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-[#4ade80] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
          {cta && <div className="flex-shrink-0">{cta}</div>}
        </div>
      </header>
    );
  }
);
LPHeader.displayName = "LPHeader";
