import React, { PropsWithChildren } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

import { AlertDialogProps } from "@radix-ui/react-alert-dialog";
import { AlertFooter, AlertFooterProps } from "./alertFooter";
import { AlertHeader, AlertHeaderProps } from "./alertHeader";
import { AlertTrigger, AlertTriggerProps } from "./alertTrigger";

interface Props extends PropsWithChildren, AlertDialogProps, AlertTriggerProps {
  footerConfig?: AlertFooterProps;
  headerConfig: AlertHeaderProps;
}

export const ConfirmAlert = ({
  children,
  footerConfig,
  headerConfig,
  triggerConfig,
  triggerItem,
  ...rest
}: Props) => {
  return (
    <AlertDialog {...rest}>
      <AlertTrigger triggerItem={triggerItem} triggerConfig={triggerConfig} />
      <AlertDialogContent>
        <AlertHeader {...headerConfig} />
        {children}
        <AlertFooter {...footerConfig} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
