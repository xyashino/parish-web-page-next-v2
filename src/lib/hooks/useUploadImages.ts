import { useState } from "react";
import { Image } from "@prisma/client";
import { apiCall } from "@/lib/utils";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";
import { useUploadedImagesStore } from "@/lib/store/useUploadedImagesStore";
import { useProgressStore } from "@/lib/store/useProgressStore";
import { ApiRoute } from "@/types/enums/api-route.enum";

export const useUploadImages = () => {
  const { clearImages } = useUploadImagesStore();
  const { value, setMaxValue, setCurrentTrack, reset } = useProgressStore();
  const { addImage } = useUploadedImagesStore();

  const [isUploading, setIsUploading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const uploadImages = async (images: File[], uuid: string) => {
    let index = 0;
    setMaxValue(images.length);
    setIsUploading(true);

    for (const image of images) {
      const formData = new FormData();
      formData.append(uuid, image);
      const uploadedImage = await apiCall<Image>(
        ApiRoute.UPLOAD_IMAGE,
        {
          method: "POST",
          body: formData,
          headers: {},
        },
        true
      );
      addImage(uploadedImage);
      setCurrentTrack(++index);
    }

    setIsDialogOpen(false);
    clearImages();

    setTimeout(() => {
      reset();
      setIsUploading(false);
    }, 1000);
  };

  return {
    uploadImages,
    isUploading,
    isDialogOpen,
    setIsDialogOpen,
    value,
  };
};
