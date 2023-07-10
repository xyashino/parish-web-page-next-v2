import { Album } from "@prisma/client";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { createEntityStore } from "@/lib/store/createEntityStore";

const ALBUM_PATH = "/api/albums";

export const useAlbumsStore = createEntityStore<Album>(
  [] as Album[],
  ALBUM_PATH,
  RevalidateTag.ALBUMS,
  {
    createMethod: {
      loading: "Tworzenie albumu...",
      success: "Album został utworzony",
      error: "Nie udało się utworzyć albumu",
    },
    deleteMethod: {
      loading: "Usuwanie albumu...",
      success: "Album został usunięty",
      error: "Nie udało się usunąć albumu",
    },
    updateMethod: {
      loading: "Aktualizowanie albumu...",
      success: "Album został zaktualizowany",
      error: "Nie udało się zaktualizować albumu",
    },
  }
);
