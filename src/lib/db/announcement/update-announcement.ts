import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { AnnouncementResponse } from "@/types/db/announcement";

export const updateAnnouncement = async (
  id: string,
  data: Prisma.AnnouncementsUpdateInput,
): Promise<AnnouncementResponse> => {
  try {
    return await client.announcements.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
