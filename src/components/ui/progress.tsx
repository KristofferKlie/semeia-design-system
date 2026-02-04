import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: "default" | "success" | "warning" | "destructive" | "xp";
  showValue?: boolean;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant = "default", showValue = false, ...props }, ref) => {
  const variantClasses = {
    default: "bg-primary",
    success: "bg-success",
    warning: "bg-warning",
    destructive: "bg-destructive",
    xp: "bg-gamification-xp",
  };

  return (
    <div className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            variantClasses[variant]
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
      {showValue && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-medium ml-2">
          {value}%
        </span>
      )}
    </div>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
