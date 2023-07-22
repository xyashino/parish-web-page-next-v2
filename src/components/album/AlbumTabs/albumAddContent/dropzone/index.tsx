"use client";
import React, { ChangeEvent, DragEvent, useRef } from "react";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";
import { NoPhotosInfo } from "./noPhotosInfo";
import { DisplayImages } from "./displayImages";

export const Dropzone = () => {
  const { images, setImages } = useUploadImagesStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const preventDefaults = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const uploadImages = (files: FileList | null) => {
    if (!files) return;
    const fileList = Array.from(files);
    setImages(fileList);
  };

  const handleFileDrop = (e: DragEvent<HTMLDivElement>) => {
    preventDefaults(e);
    uploadImages(e.dataTransfer.files);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    uploadImages(e.target.files);
  };

  return (
    <div
      className="w-full h-full border-4 border-dashed border-gray-200 rounded-md p-5 hover:bg-muted transition-colors group cursor-pointer"
      onDragOver={preventDefaults}
      onDragEnter={preventDefaults}
      onDragLeave={preventDefaults}
      onDrop={handleFileDrop}
      role="button"
      onClick={() => inputRef.current?.click()}
    >
      <div className="grid min-h-[150px] place-items-center">
        {images.length === 0 ? <NoPhotosInfo /> : <DisplayImages />}
      </div>
      <input
        multiple
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleFileInput}
        ref={inputRef}
      />
    </div>
  );
};
