import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { AnnouncementsResponse } from "@/types/db/announcement";

export const getAnnouncements = async (
  orderBy?: Prisma.AnnouncementsCountOrderByAggregateInput,
): Promise<AnnouncementsResponse> => client.announcements.findMany({ orderBy });
