import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

export const DropShadowCard = ({ className, children, ...props }: Props) => {
  const divClassNames = cn(
    "drop-shadow-xl bg-background rounded-xl px-8 py-4 shadow-slate-500 mb-4 ring-offset-2 ring-offset-background ring-2 ring-slate-500",
    className
  );
  return (
    <div className={divClassNames} {...props}>
      {children}
    </div>
  );
};
