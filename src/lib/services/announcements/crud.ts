import { ApiRoute, RevalidateTag } from "@/types/enums";
import { Announcements } from "@prisma/client";
import { ANNOUNCEMENTS_API_MESSAGES } from "@/lib/constants/announcements";
import { BaseCrudApiCall } from "@/lib/services/crud";

export const AnnouncementsCrud = new BaseCrudApiCall<Announcements>(
  ApiRoute.BASE_ANNOUNCEMENTS,
  [RevalidateTag.ANNOUNCEMENTS],
  true,
  ANNOUNCEMENTS_API_MESSAGES
);
