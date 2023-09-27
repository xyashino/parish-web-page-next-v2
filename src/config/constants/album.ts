import { z } from "zod";
import { modifyAlbumSchema } from "@/lib/schemas/album";
import { ApiToastsCrudMessages } from "@/types/toast";

export const ALBUM_DEFAULT_VALUE: z.infer<typeof modifyAlbumSchema> = {
  title: "",
  subtitle: "",
  categoryId: "",
  show: true,
} as const;

export const ALBUM_API_MESSAGES: ApiToastsCrudMessages = {
  create: {
    loading: "Tworzenie albumu...",
    success: "Album został utworzony",
    error: "Nie udało się utworzyć albumu",
  },
  delete: {
    loading: "Usuwanie albumu...",
    success: "Album został usunięty",
    error: "Nie udało się usunąć albumu",
  },
  update: {
    loading: "Aktualizowanie albumu...",
    success: "Album został zaktualizowany",
    error: "Nie udało się zaktualizować albumu",
  },
} as const;
