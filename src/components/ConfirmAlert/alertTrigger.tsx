import React from "react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

export interface AlertTriggerProps {
  triggerValue: React.ReactNode;
  className?: string;
}

const AlertTrigger = ({ triggerValue, className }: AlertTriggerProps) => {
  const triggerClasses = cn(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-1/4",
    className
  );
  return (
    <AlertDialogTrigger className={triggerClasses}>
      {triggerValue}
    </AlertDialogTrigger>
  );
};

export default AlertTrigger;
