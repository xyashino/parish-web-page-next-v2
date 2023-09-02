import client from "@/lib/db";
import { AnnouncementResponse } from "@/types/db/announcement";

export const deleteAnnouncement = async (
  id: string,
): Promise<AnnouncementResponse> => {
  try {
    return await client.announcements.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
