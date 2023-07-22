import {
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import React from "react";
export const UploadDialogHeader = () => {
  return (
    <AlertDialogHeader className="text-center">
      <AlertDialogTitle>
        Czy na pewno chcesz dodać zdjęcia do albumu?
      </AlertDialogTitle>
      <Separator className="w-11/12 mx-auto my-2" />
    </AlertDialogHeader>
  );
};
