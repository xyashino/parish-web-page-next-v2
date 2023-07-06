"use client";
import React, { SyntheticEvent } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

export interface AlertFooterProps {
  doAfterConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
}

const AlertFooter = ({
  doAfterConfirm,
  cancelText = "Anuluj",
  confirmText = "Potwierdź",
}: AlertFooterProps) => {
  const handleConfirm = () => {
    doAfterConfirm && doAfterConfirm();
  };
  return (
    <AlertDialogFooter>
      <AlertDialogCancel>{cancelText}</AlertDialogCancel>
      <AlertDialogAction onClick={handleConfirm}>
        {confirmText}
      </AlertDialogAction>
    </AlertDialogFooter>
  );
};

export default AlertFooter;
