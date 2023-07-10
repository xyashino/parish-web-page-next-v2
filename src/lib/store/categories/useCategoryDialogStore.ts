import modifyCategorySchema from "@/components/ModifyCategoryDialog/modify-category.schema";
import { createDialogStore } from "@/lib/store/createDialogStore";
import { z } from "zod";

const CATEGORY_DEFAULT_VALUE: z.infer<typeof modifyCategorySchema> = {
  name: "",
  order: 0,
};
export const useCategoryDialogStore = createDialogStore(
  modifyCategorySchema,
  CATEGORY_DEFAULT_VALUE
);
