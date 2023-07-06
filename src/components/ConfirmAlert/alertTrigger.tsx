import React from "react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

export interface AlertTriggerProps {
  triggerValue: React.ReactNode;
  className?: string;
}

const AlertTrigger = ({ triggerValue, className }: AlertTriggerProps) => {
  const triggerClasses = cn(
    "inline-flex capitalize items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4",
    className
  );
  return (
    <AlertDialogTrigger className={triggerClasses}>
      {triggerValue}
    </AlertDialogTrigger>
  );
};

export default AlertTrigger;
