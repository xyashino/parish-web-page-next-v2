import { Prisma } from "@prisma/client";
import client from "@/lib/db";

export const updateWeekIntentions = async (
  id: string,
  data: Prisma.WeekIntentionsUpdateInput
) => {
  try {
    return await client.weekIntentions.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
