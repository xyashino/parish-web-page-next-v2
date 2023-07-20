import { create } from "zustand";

interface UploadImagesStore {
  images: File[];
  setImages: (images: File[]) => void;
  deleteImage: (index: number) => void;
  clearImages: () => void;
}

export const useUploadImagesStore = create<UploadImagesStore>((set) => ({
  images: [],
  setImages: (images) =>
    set((prev) => ({ images: [...prev.images, ...images] })),
  deleteImage: (index) =>
    set((state) => {
      const newImages = [...state.images];
      newImages.splice(index, 1);
      return { images: newImages };
    }),
  clearImages: () => set({ images: [] }),
}));
