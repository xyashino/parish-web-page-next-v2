import client from "@/lib/db";

export const getActiveAnnouncement = async () =>
  client.announcements.findFirst({
    where: { status: "ACTIVE" },
  });
