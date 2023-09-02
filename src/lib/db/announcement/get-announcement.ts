import client from "@/lib/db";
import { AnnouncementResponse } from "@/types/db/announcement";

export const getAnnouncement = async (
  id: string,
): Promise<AnnouncementResponse> =>
  client.announcements.findUnique({
    where: { id },
  });
