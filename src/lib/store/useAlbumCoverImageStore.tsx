import { create } from "zustand";
import { apiCall, apiCallWithToast } from "@/lib/utils";
import { Album, Image } from "@prisma/client";
interface AlbumCoverImageStore {
  coverImagePath: string | null | undefined;
  setCoverImage: (coverImage: string | null | undefined) => void;
  setDefault: () => void;
  setCoverImageByImageId: (imageId: string, albumId?: string) => void;
}

const getImage = async (id: string) => {
  return apiCall<Image>(`/api/images/${id}`);
};

const updateCoverAlbumImage = async (albumId: string, coverId: string) => {
  return apiCallWithToast<Image>({
    url: `/api/albums/${albumId}`,
    fetchOptions: {
      method: "PUT",
      body: JSON.stringify({ coverId } as Partial<Album>),
    },
    msg: {
      success: "Zaktualizowano okładkę albumu",
      error: "Nie udało się zaktualizować okładki albumu",
      loading: "Aktualizowanie okładki ...",
    },
  });
};

export const useAlbumCoverImageStore = create<AlbumCoverImageStore>(
  (set, get) => ({
    coverImagePath: null,
    setCoverImage: (coverImagePath) => set({ coverImagePath }),
    setDefault: () => set({ coverImagePath: null }),
    setCoverImageByImageId: async (imageId, albumId) => {
      const image = await getImage(imageId);
      set({ coverImagePath: image.path });
      if (!albumId) return;
      await updateCoverAlbumImage(albumId, imageId);
    },
  })
);
