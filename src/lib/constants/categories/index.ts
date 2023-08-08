import { z } from "zod";
import { modifyCategorySchema } from "@/lib/schemas/categories";
import { ApiToastsCrudMessages } from "@/types/toast";

export const CATEGORY_DEFAULT_VALUE: z.infer<typeof modifyCategorySchema> = {
  name: "",
  order: 0,
  show: true,
};

export const CATEGORY_API_MESSAGES: ApiToastsCrudMessages = {
  delete: {
    success: "Usunięto kategorię",
    error: "Nie udało się usunąć kategorii",
    loading: "Trwa usuwanie kategorii...",
  },
  update: {
    success: "Zaktualizowano kategorię",
    error: "Nie udało się zaktualizować kategorii",
    loading: "Trwa aktualizowanie kategorii...",
  },
  create: {
    success: "Utworzono kategorię",
    error: "Nie udało się utworzyć kategorii",
    loading: "Trwa tworzenie kategorii...",
  },
};
