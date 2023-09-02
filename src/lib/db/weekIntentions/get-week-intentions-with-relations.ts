import client from "@/lib/db";

export const getWeekIntentionWithRelations = async (id: string) => {
  const result = await client.weekIntentions.findUnique({
    where: { id },
    select: {
      days: {
        select: {
          intentions: {
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });

  if (!result) throw new Error("Intention not found");
  return result;
};
