import { createDialogStore } from "@/lib/store/default";
import { modifyCategorySchema } from "@/lib/schemas/categories";
import { CATEGORY_DEFAULT_VALUE } from "@/lib/constants/categories";

export const useCategoryDialogStore = createDialogStore(
  modifyCategorySchema,
  CATEGORY_DEFAULT_VALUE
);
