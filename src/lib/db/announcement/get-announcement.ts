import client from "@/lib/db";

export const getAnnouncement = async (id: string) =>
  client.announcements.findUnique({
    where: { id },
  });
