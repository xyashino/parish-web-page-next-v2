import React from "react";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";
import { UploadImage } from "./uploadImage";

export const DisplayImages = () => {
  const { images } = useUploadImagesStore();
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {images.map((file, index) => {
        const src = URL.createObjectURL(file);
        return <UploadImage key={`${src}-${index}`} src={src} index={index} />;
      })}
    </div>
  );
};
