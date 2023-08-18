import React from "react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { AlertDialogTriggerProps } from "@radix-ui/react-alert-dialog";
import { buttonVariants } from "@/components/ui/button";

export interface AlertTriggerProps extends AlertDialogTriggerProps {
  triggerValue: React.ReactNode;
  className?: string;
  disableAllClasses?: boolean;
}

export const AlertTrigger = ({
  triggerValue,
  className,
  disableAllClasses = false,
  ...props
}: AlertTriggerProps) => {
  const triggerClasses = cn(
    disableAllClasses ? "" : buttonVariants({ variant: "default" }),
    className
  );
  return (
    <AlertDialogTrigger className={triggerClasses} {...props}>
      {triggerValue}
    </AlertDialogTrigger>
  );
};
