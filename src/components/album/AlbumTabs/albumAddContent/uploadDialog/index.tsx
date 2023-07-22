"use client";
import React, { SyntheticEvent } from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";
import { UploadDialogTrigger } from "./uploadDialogTrigger";
import { UploadDialogConfirm } from "./uploadDialogConfirm";
import { UploadDialogProgress } from "./uploadDialogProgress";
import { useParams } from "next/navigation";
import { useUploadImages } from "@/lib/hooks/useUploadImages";

export const UploadDialog = () => {
  const { uuid } = useParams();
  const { images } = useUploadImagesStore();
  const { uploadImages, isUploading, setIsDialogOpen, isDialogOpen, value } =
    useUploadImages();

  const handleUploadImages = async (e: SyntheticEvent) => {
    e.preventDefault();
    await uploadImages(images, uuid);
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
