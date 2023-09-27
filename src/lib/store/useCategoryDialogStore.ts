import { createDialogStore } from "./utils/createDialogStore";
import { modifyCategorySchema } from "@/lib/schemas/categories";
import { CATEGORY_DEFAULT_VALUE } from "@/config/constants/categories";

export const useCategoryDialogStore = createDialogStore(
  modifyCategorySchema,
  CATEGORY_DEFAULT_VALUE,
);
