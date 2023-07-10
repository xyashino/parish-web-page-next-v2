import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { createEntityStore } from "@/lib/store/createEntityStore";
import { Category } from "@prisma/client";

const CATEGORY_PATH = "/api/categories";
export const useCategoriesStore = createEntityStore(
  [] as Category[],
  CATEGORY_PATH,
  RevalidateTag.CATEGORIES,
  {
    createMethod: {
      loading: "Tworzenie kategorii...",
      success: "Kategoria została utworzona",
      error: "Nie udało się utworzyć kategorii",
    },
    deleteMethod: {
      loading: "Usuwanie kategorii...",
      success: "Kategoria została usunięta",
      error: "Nie udało się usunąć kategorii",
    },
    updateMethod: {
      loading: "Aktualizowanie kategorii...",
      success: "Kategoria została zaktualizowana",
      error: "Nie udało się zaktualizować kategorii",
    },
  }
);
