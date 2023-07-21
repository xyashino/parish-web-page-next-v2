import client from "@/lib/db";

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
