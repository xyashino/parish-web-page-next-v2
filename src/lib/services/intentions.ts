import { ApiRoute } from "@/types/enums";
import { WEEK_INTENTIONS_API_MESSAGES } from "@/lib/constants/week-intentions";
import { BaseCrudApiCall } from "@/lib/services/default";

export const IntentionsApiService = new BaseCrudApiCall(
  ApiRoute.BASE_WEEK_INTENTIONS,
  true,
  WEEK_INTENTIONS_API_MESSAGES,
);
