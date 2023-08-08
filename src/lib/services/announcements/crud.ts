import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { ANNOUNCEMENTS_API_MESSAGES } from "@/lib/constants/announcements";
import { BaseCrudApiCall } from "@/lib/services/crud";
import { Announcements } from "@prisma/client";

export const AnnouncementsCrud = new BaseCrudApiCall<Announcements>(
  ApiRoute.BASE_ANNOUNCEMENTS,
  [RevalidateTag.ANNOUNCEMENTS],
  true,
  ANNOUNCEMENTS_API_MESSAGES
);
