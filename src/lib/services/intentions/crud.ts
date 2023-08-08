import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { WEEK_INTENTIONS_API_MESSAGES } from "@/lib/constants/week-intentions";
import { BaseCrudApiCall } from "@/lib/services/crud";

// export const deleteWeekIntentionApiCall = async (id: string) => {
//   return await apiCallWithToast({
//     url: `${ApiRoute.BASE_WEEK_INTENTIONS}/${id}`,
//     fetchOptions: {
//       method: "DELETE",
//       next: { tags: [RevalidateTag.INTENTIONS] },
//     },
//     msg: WEEK_INTENTIONS_API_MESSAGES.delete,
//   });
// };
//
// export const createWeekIntentionApiCall = async (
//   body: WeekCreateIntentionsValidator
// ) => {
//   return await apiCallWithToast({
//     url: ApiRoute.BASE_WEEK_INTENTIONS,
//     fetchOptions: {
//       method: "POST",
//       body: JSON.stringify(body),
//       next: { tags: [RevalidateTag.INTENTIONS] },
//     },
//     msg: WEEK_INTENTIONS_API_MESSAGES.create,
//   });
// };
//
// export const updateWeekIntentionApiCall = async (
//   id: string,
//   body: WeekCreateIntentionsValidator
// ) => {
//   return await apiCallWithToast({
//     url: ApiRoute.BASE_WEEK_INTENTIONS,
//     fetchOptions: {
//       method: "PUT",
//       body: JSON.stringify(body),
//       next: { tags: [RevalidateTag.INTENTIONS] },
//     },
//     msg: WEEK_INTENTIONS_API_MESSAGES.update,
//   });
// };
export const IntentionsCrud = new BaseCrudApiCall(
  ApiRoute.BASE_WEEK_INTENTIONS,
  [RevalidateTag.INTENTIONS],
  true,
  WEEK_INTENTIONS_API_MESSAGES
);
