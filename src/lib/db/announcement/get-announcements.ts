import { Prisma } from "@prisma/client";
import client from "@/lib/db";

export const getAnnouncements = async (
  orderBy?: Prisma.AnnouncementsCountOrderByAggregateInput
) => {
  return client.announcements.findMany({ orderBy });
};
