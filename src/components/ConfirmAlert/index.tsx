import React, { PropsWithChildren } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import AlertFooter, {
  AlertFooterProps,
} from "@/components/ConfirmAlert/alertFooter";
import AlertHeader, {
  AlertHeaderProps,
} from "@/components/ConfirmAlert/alertHeader";
import AlertTrigger, {
  AlertTriggerProps,
} from "@/components/ConfirmAlert/alertTrigger";

interface Props extends PropsWithChildren {
  footerData?: AlertFooterProps;
  headerData: AlertHeaderProps;
  triggerData: AlertTriggerProps;
}

const ConfirmAlert = ({
  children,
  footerData,
  headerData,
  triggerData,
}: Props) => {
  return (
    <AlertDialog>
      <AlertTrigger {...triggerData} />
      <AlertDialogContent>
        <AlertHeader {...headerData} />
        {children}
        <AlertFooter {...footerData} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default ConfirmAlert;
