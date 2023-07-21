import client from "@/lib/db";

export const getActiveAnnouncement = async () => {
  const result = await client.announcements.findFirst({
    where: { status: "ACTIVE" },
  });
  if (!result) throw new Error("Active announcement not found");
  return result;
};
