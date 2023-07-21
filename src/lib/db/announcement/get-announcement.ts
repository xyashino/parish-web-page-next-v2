import client from "@/lib/db";

export const getAnnouncement = async (id: string) => {
  const result = await client.announcements.findUnique({
    where: { id },
  });
  if (!result) throw new Error("Announcement not found");
  return result;
};
