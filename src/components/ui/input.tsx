import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error state - shows red border
   */
  error?: boolean;
  /**
   * Error message to display
   */
  errorMessage?: string;
  /**
   * Left addon element (icon or text)
   */
  leftAddon?: React.ReactNode;
  /**
   * Right addon element (icon or text)
   */
  rightAddon?: React.ReactNode;
}

/**
 * Input component with error states and addons
 *
 * @example
 * // Basic input
 * <Input placeholder="Enter your name" />
 *
 * @example
 * // With error
 * <Input error errorMessage="This field is required" />
 *
 * @example
 * // With addons
 * <Input leftAddon={<SearchIcon />} placeholder="Search..." />
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      errorMessage,
      leftAddon,
      rightAddon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <div className="w-full">
        <div className="relative">
          {leftAddon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftAddon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus-visible:ring-destructive",
              leftAddon && "pl-10",
              rightAddon && "pr-10",
              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {rightAddon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightAddon}
            </div>
          )}
        </div>
        {error && errorMessage && (
          <p className="mt-1.5 text-sm text-destructive">{errorMessage}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
