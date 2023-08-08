import { useState } from "react";
import { Image } from "@prisma/client";
import { apiCall } from "@/lib/utils";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";
import { useProgressStore } from "@/lib/store/useProgressStore";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { useParams, useRouter } from "next/navigation";

const uploadImageApiCall = async (image: File, uuid: string) => {
  const formData = new FormData();
  formData.append(uuid, image);
  return await apiCall<Image>(
    ApiRoute.UPLOAD_IMAGE,
    {
      method: "POST",
      body: formData,
      headers: {},
    },
    true
  );
};

export const useUploadImages = () => {
  const { uuid } = useParams();
  const { clearImages, images } = useUploadImagesStore();
  const { value, setMaxValue, setCurrentTrack, reset } = useProgressStore();
  const { refresh } = useRouter();

  const [isUploading, setIsUploading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetStates = () => {
    setIsDialogOpen(false);
    clearImages();
    setTimeout(() => {
      reset();
      setIsUploading(false);
    }, 1000);
  };

  const uploadImages = async () => {
    let index = 0;
    setMaxValue(images.length);
    setIsUploading(true);

    for (const image of images) {
      await uploadImageApiCall(image, uuid);
      setCurrentTrack(++index);
    }
    resetStates();
    refresh();
  };

  return {
    uploadImages,
    isUploading,
    isDialogOpen,
    setIsDialogOpen,
    value,
  };
};
