import { Prisma } from "@prisma/client";
import client from "@/lib/db";

export const updateAnnouncement = async (
  id: string,
  data: Prisma.AnnouncementsUpdateInput
) => {
  try {
    return await client.announcements.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
