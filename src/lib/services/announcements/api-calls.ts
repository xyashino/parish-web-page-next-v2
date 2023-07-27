import { AnnouncementBody } from "@/types/announcement-edit.types";
import { apiCallWithToast } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { ANNOUNCEMENTS_API_MESSAGES } from "@/lib/constants/announcements-api-messages.constant";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

const announcementsApiCall = (
  method: ApiMethod,
  id: string | null,
  body: AnnouncementBody | null,
  msg: any
) =>
  apiCallWithToast({
    url: `${ApiRoute.BASE_ANNOUNCEMENTS}${id ? `/${id}` : ""}`,
    fetchOptions: {
      method: method,
      ...(body && { body: JSON.stringify(body) }),
      next: { tags: [RevalidateTag.ANNOUNCEMENTS] },
    },
    msg,
  });

export const deleteAnnouncementApiCall = async (id: string) =>
  announcementsApiCall("DELETE", id, null, ANNOUNCEMENTS_API_MESSAGES.delete);

export const updateAnnouncementApiCall = (id: string, body: AnnouncementBody) =>
  announcementsApiCall("PUT", id, body, ANNOUNCEMENTS_API_MESSAGES.update);

export const createAnnouncementApiCall = (body: AnnouncementBody) =>
  announcementsApiCall("POST", null, body, ANNOUNCEMENTS_API_MESSAGES.create);
