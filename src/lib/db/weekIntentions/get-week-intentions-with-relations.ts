import client from "@/lib/db";

export const getWeekIntentionWithRelations = async (id: string) => {
  const result = await client.weekIntentions.findUnique({
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

  if (!result) throw new Error("Intention not found");
  return result;
};
