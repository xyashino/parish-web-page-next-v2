import React from "react";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { UploadIcon } from "@radix-ui/react-icons";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";

export const UploadDialogTrigger = () => {
  const { images } = useUploadImagesStore();
  return (
    <AlertDialogTrigger className="mx-auto" disabled={images.length === 0}>
      <ButtonWithIcon
        text="Dodaj zdjęcia"
        Icon={UploadIcon}
        className="mx-auto capitalize select-none"
        disabled={images.length === 0}
      />
    </AlertDialogTrigger>
  );
};
