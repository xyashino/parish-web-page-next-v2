import client from "@/lib/db";
import { Prisma } from "@prisma/client";
import { AnnouncementResponse } from "@/types/db/announcement";

export const createAnnouncement = async (
  data: Prisma.AnnouncementsCreateInput,
): Promise<AnnouncementResponse> => {
  try {
    return await client.announcements.create({ data });
  } catch (error) {
    console.error(error);
    return null;
  }
};
