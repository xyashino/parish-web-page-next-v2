import { create } from "zustand";
import { getImageCoverPath, updateCoverImage } from "@/lib/services/images/api";

interface AlbumCoverImageStore {
  coverImagePath: string | null | undefined;
  setCoverImage: (coverImage: string | null | undefined) => void;
  setDefault: () => void;
  setCoverImageByImageId: (imageId: string, albumId?: string) => void;
}

export const useAlbumCoverImageStore = create<AlbumCoverImageStore>((set) => ({
  coverImagePath: null,
  setCoverImage: (coverImagePath) => set({ coverImagePath }),
  setDefault: () => set({ coverImagePath: null }),
  setCoverImageByImageId: async (imageId, albumId) => {
    set({ coverImagePath: await getImageCoverPath(imageId) });
    if (!albumId) return;
    await updateCoverImage(albumId, imageId);
  },
}));
