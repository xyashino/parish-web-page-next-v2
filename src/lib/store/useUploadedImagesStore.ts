import { Image } from "@prisma/client";
import { create } from "zustand";
import { apiCallWithToast } from "@/lib/utils";

const deleteImageApiCall = async (id: string) => {
  return apiCallWithToast<Image>({
    url: `/api/images/${id}`,
    fetchOptions: {
      method: "DELETE",
    },
    msg: {
      success: "Zdjęcie zostało usunięte",
      error: "Błąd podczas usuwania zdjęcia",
      loading: "Usuwanie zdjęcia...",
    },
  });
};

interface UploadedImagesStore {
  images: Image[];
  addImage: (image: Image) => void;
  removeImage: (id: string) => Promise<void>;
  clearImages: () => void;
  setImages: (images: Image[]) => void;
}

export const useUploadedImagesStore = create<UploadedImagesStore>((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
  removeImage: async (id) => {
    const deletedImage = await deleteImageApiCall(id);
    set((state) => ({
      images: state.images.filter((i) => i.id !== deletedImage.id),
    }));
  },
  clearImages: () => set({ images: [] }),
}));
