import { ApiRoute } from "@/types/enums";
import { ANNOUNCEMENTS_API_MESSAGES } from "@/config/constants/announcements";
import { BaseCrudApiCall } from "@/lib/services/default";
import { AnnouncementResponse } from "@/types/db/announcement";

export const AnnouncementsApiService =
  new BaseCrudApiCall<AnnouncementResponse>(
    ApiRoute.BASE_ANNOUNCEMENTS,
    true,
    ANNOUNCEMENTS_API_MESSAGES,
  );
