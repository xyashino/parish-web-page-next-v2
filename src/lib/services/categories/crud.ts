import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { BaseCrudApiCall } from "@/lib/services/crud";
import { CATEGORY_API_MESSAGES } from "@/lib/constants/categories";

export const CategoriesCrud = new BaseCrudApiCall(
  ApiRoute.BASE_CATEGORIES,
  [RevalidateTag.CATEGORIES],
  true,
  CATEGORY_API_MESSAGES
);
