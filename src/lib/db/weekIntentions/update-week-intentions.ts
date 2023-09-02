import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { WeekIntentionsResponse } from "@/types/db/week-intentions";

export const updateWeekIntentions = async (
  id: string,
  data: Prisma.WeekIntentionsUpdateInput,
): Promise<WeekIntentionsResponse> => {
  try {
    return await client.weekIntentions.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
