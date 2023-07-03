import client from "@/lib/prisma";
import {Prisma} from "@prisma/client";

export const createAnnouncement = async (
    data: Prisma.AnnouncementsCreateInput
) => {
    try {
        return await client.announcements.create({ data });
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};
