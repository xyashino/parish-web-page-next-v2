import client from "@/lib/db";

export const getManyWeekIntentions = async () =>
  await client.weekIntentions.findMany({
    orderBy: {
      status: "desc",
    },
  });
