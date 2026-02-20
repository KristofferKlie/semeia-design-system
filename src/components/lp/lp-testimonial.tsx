import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPTestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role?: string;
  avatar?: React.ReactNode;
}

export const LPTestimonial = React.forwardRef<HTMLDivElement, LPTestimonialProps>(
  ({ className, quote, author, role, avatar, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("lp-card", className)} {...props}>
        <div className="flex flex-col gap-4">
          <svg
            className="w-8 h-8 text-[#4ade80] opacity-50"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
          </svg>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">{quote}</p>
          <div className="flex items-center gap-3 mt-2">
            {avatar}
            <div>
              <p className="font-semibold text-white">{author}</p>
              {role && <p className="text-sm text-neutral-500">{role}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
LPTestimonial.displayName = "LPTestimonial";
