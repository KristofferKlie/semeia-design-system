"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPFaqItem {
  question: string;
  answer: string;
}

export interface LPFaqProps extends React.HTMLAttributes<HTMLDivElement> {
  items: LPFaqItem[];
}

function FaqAccordionItem({ item }: { item: LPFaqItem }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="lp-faq-item">
      <button
        className="lp-faq-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold">{item.question}</span>
        <svg
          className={cn(
            "w-5 h-5 text-neutral-400 transition-transform duration-200 flex-shrink-0",
            isOpen && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && <div className="lp-faq-content">{item.answer}</div>}
    </div>
  );
}

export const LPFaq = React.forwardRef<HTMLDivElement, LPFaqProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {items.map((item, index) => (
          <FaqAccordionItem key={index} item={item} />
        ))}
      </div>
    );
  }
);
LPFaq.displayName = "LPFaq";
