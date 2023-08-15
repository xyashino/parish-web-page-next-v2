import { ApiRoute, RevalidateTag } from "@/types/enums";
import { BaseCrudApiCall } from "@/lib/services/crud";
import { CATEGORY_API_MESSAGES } from "@/lib/constants/categories";

export const CategoriesCrud = new BaseCrudApiCall(
  ApiRoute.BASE_CATEGORIES,
  [RevalidateTag.CATEGORIES],
  true,
  CATEGORY_API_MESSAGES
);
