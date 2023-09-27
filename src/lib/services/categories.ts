import { ApiRoute } from "@/types/enums";
import { CATEGORY_API_MESSAGES } from "@/config/constants/categories";
import { BaseCrudApiCall } from "@/lib/services/default";

export const CategoriesApiService = new BaseCrudApiCall(
  ApiRoute.BASE_CATEGORIES,
  true,
  CATEGORY_API_MESSAGES,
);
