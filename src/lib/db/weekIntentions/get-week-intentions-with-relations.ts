import client from "@/lib/db";

export const getWeekIntentionWithRelations = async (id: string) =>
  client.weekIntentions.findUnique({
    where: { id },
    include: {
      days: {
        include: {
          intentions: {
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });
