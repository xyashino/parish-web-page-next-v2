import { create } from "zustand";
interface AlbumCoverImageStore {
  coverImage: string | null | undefined;
  setCoverImage: (coverImage: string | null | undefined) => void;
  setDefault: () => void;
}

export const useAlbumCoverImageStore = create<AlbumCoverImageStore>(
  (set, get) => ({
    coverImage: null,
    setCoverImage: (coverImage) => set({ coverImage }),
    setDefault: () => set({ coverImage: null }),
  })
);
