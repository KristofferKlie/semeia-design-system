import * as React from "react";
import { cn } from "@/lib/utils";

export interface LPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const LPInput = React.forwardRef<HTMLInputElement, LPInputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        {label && (
          <label htmlFor={inputId} className="lp-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "lp-input",
            error && "border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
LPInput.displayName = "LPInput";

export interface LPTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const LPTextarea = React.forwardRef<HTMLTextAreaElement, LPTextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div>
        {label && (
          <label htmlFor={textareaId} className="lp-label">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "lp-input min-h-[120px] resize-y",
            error && "border-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
LPTextarea.displayName = "LPTextarea";
