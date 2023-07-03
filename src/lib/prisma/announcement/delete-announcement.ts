import client from "@/lib/prisma";

export const deleteAnnouncement = async (id: string) => {
    try {
        return await client.announcements.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error);
        throw new Error("Announcement not found");
    }
};
