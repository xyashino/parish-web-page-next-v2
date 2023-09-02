import client from "@/lib/db";
import { AnnouncementResponse } from "@/types/db/announcement";

export const getActiveAnnouncement = async (): Promise<AnnouncementResponse> =>
  client.announcements.findFirst({
    where: { status: "ACTIVE" },
  });
