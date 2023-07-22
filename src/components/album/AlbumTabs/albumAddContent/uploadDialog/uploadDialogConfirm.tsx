import React, { SyntheticEvent } from "react";
import {
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { UploadDialogHeader } from "./uploadDialogHeader";

interface Props {
  doAfterConfirm: (e: SyntheticEvent) => void;
}

export const UploadDialogConfirm = ({ doAfterConfirm }: Props) => (
  <>
    <UploadDialogHeader />
    <div className="w-full flex items-center justify-end space-x-2">
      <AlertDialogCancel>Nie</AlertDialogCancel>
      <AlertDialogAction onClick={doAfterConfirm}>Tak</AlertDialogAction>
    </div>
  </>
);
