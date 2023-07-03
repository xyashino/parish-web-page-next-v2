import { Prisma } from "@prisma/client";
import client from "@/lib/prisma";

export const getAnnouncements = async (
    orderBy?: Prisma.AnnouncementsCountOrderByAggregateInput
) => {
    return client.announcements.findMany({ orderBy });
};
