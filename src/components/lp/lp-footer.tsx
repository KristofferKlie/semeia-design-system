import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPFooterLink {
  label: string;
  href: string;
}

export interface LPFooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  links?: LPFooterLink[];
  copyright?: string;
}

export const LPFooter = React.forwardRef<HTMLElement, LPFooterProps>(
  ({ className, logo, links = [], copyright, children, ...props }, ref) => {
    const currentYear = new Date().getFullYear();

    return (
      <footer ref={ref} className={cn("lp-footer", className)} {...props}>
        <div className="lp-container">
          <div className="flex flex-col items-center gap-8">
            {logo && <div className="opacity-50">{logo}</div>}
            {links.length > 0 && (
              <nav className="flex flex-wrap justify-center gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}
            {children}
            <p className="text-sm text-neutral-500">
              {copyright ||
                `\u00A9 ${currentYear} SemeIA Educa\u00E7\u00E3o. Todos os direitos reservados.`}
            </p>
          </div>
        </div>
      </footer>
    );
  }
);
LPFooter.displayName = "LPFooter";
