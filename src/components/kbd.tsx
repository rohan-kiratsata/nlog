import React from "react";
import { cn } from "@/lib/utils";

const baseClass =
  "select-none rounded border px-1.5 py-px font-mono text-[0.7rem] font-normal shadow-sm disabled:opacity-50 bg-accent text-accent-foreground";

export interface KbdProps extends React.ComponentPropsWithoutRef<"kbd"> {
  abbrTitle?: string;
}

const Kbd = React.forwardRef<HTMLUnknownElement, KbdProps>(
  ({ abbrTitle, children, className, ...props }, ref) => {
    return (
      <kbd className={cn(baseClass, className)} ref={ref} {...props}>
        {abbrTitle ? (
          <abbr title={abbrTitle} className="no-underline">
            {children}
          </abbr>
        ) : (
          children
        )}
      </kbd>
    );
  },
);

Kbd.displayName = "Kbd";

export { Kbd };
