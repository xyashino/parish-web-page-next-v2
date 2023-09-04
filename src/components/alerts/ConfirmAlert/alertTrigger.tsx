import React from "react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { AlertDialogTriggerProps } from "@radix-ui/react-alert-dialog";

export interface AlertTriggerProps {
  triggerItem: React.ReactNode;
  triggerConfig?: AlertDialogTriggerProps;
}

export const AlertTrigger = ({
  triggerItem,
  triggerConfig,
}: AlertTriggerProps) => {
  return (
    <AlertDialogTrigger {...triggerConfig} asChild>
      {triggerItem}
    </AlertDialogTrigger>
  );
};
