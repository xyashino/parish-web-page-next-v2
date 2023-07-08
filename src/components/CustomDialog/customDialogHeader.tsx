import React from "react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

export interface ModifyDialogHeaderProps {
  title: string;
  subtitle: string;
}

const CustomDialogHeader = ({ title, subtitle }: ModifyDialogHeaderProps) => {
  return (
    <DialogHeader className="space-y-2">
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription className="italic">{subtitle}</DialogDescription>
      <Separator className="w-11/12 mx-auto" />
    </DialogHeader>
  );
};
export default CustomDialogHeader;
