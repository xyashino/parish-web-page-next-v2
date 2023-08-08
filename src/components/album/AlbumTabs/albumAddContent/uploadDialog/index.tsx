"use client";
import React, { SyntheticEvent } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { UploadDialogTrigger } from "./uploadDialogTrigger";
import { UploadDialogConfirm } from "./uploadDialogConfirm";
import { UploadDialogProgress } from "./uploadDialogProgress";
import { useUploadImages } from "@/lib/hooks/useUploadImages";

export const UploadDialog = () => {
  const { uploadImages, isUploading, setIsDialogOpen, isDialogOpen } =
    useUploadImages();

  const handleUploadImages = async (e: SyntheticEvent) => {
    e.preventDefault();
    await uploadImages();
  };
  return (
    <AlertDialog onOpenChange={setIsDialogOpen} open={isDialogOpen}>
      <UploadDialogTrigger />
      <AlertDialogContent>
        {isUploading ? (
          <UploadDialogProgress />
        ) : (
          <UploadDialogConfirm doAfterConfirm={handleUploadImages} />
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
