import React, { SyntheticEvent } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export interface AlertHeaderProps {
  title: string;
  description?: string;
}

const AlertHeader = ({ title, description }: AlertHeaderProps) => {
  return (
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      <AlertDialogDescription>{description}</AlertDialogDescription>
    </AlertDialogHeader>
  );
};

export default AlertHeader;
