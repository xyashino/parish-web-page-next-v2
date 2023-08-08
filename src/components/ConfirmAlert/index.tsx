import React, { PropsWithChildren } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { AlertFooterProps, AlertFooter } from "./alertFooter";
import { AlertHeaderProps, AlertHeader } from "./alertHeader";
import { AlertTriggerProps, AlertTrigger } from "./alertTrigger";

interface Props extends PropsWithChildren, AlertDialogProps {
  footerData?: AlertFooterProps;
  headerData: AlertHeaderProps;
  triggerData: AlertTriggerProps;
}

export const ConfirmAlert = ({
  children,
  footerData,
  headerData,
  triggerData,
  ...rest
}: Props) => {
  return (
    <AlertDialog {...rest}>
      <AlertTrigger {...triggerData} />
      <AlertDialogContent>
        <AlertHeader {...headerData} />
        {children}
        <AlertFooter {...footerData} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
