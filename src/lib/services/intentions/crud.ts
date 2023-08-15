import { ApiRoute, RevalidateTag } from "@/types/enums";
import { WEEK_INTENTIONS_API_MESSAGES } from "@/lib/constants/week-intentions";
import { BaseCrudApiCall } from "@/lib/services/crud";

export const IntentionsCrud = new BaseCrudApiCall(
  ApiRoute.BASE_WEEK_INTENTIONS,
  [RevalidateTag.INTENTIONS],
  true,
  WEEK_INTENTIONS_API_MESSAGES
);
