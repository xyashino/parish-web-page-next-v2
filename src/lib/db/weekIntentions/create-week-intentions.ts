import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { WeekIntentionsResponse } from "@/types/db/week-intentions";

export const createWeekIntention = async (
  data: Prisma.WeekIntentionsCreateInput,
): Promise<WeekIntentionsResponse> => {
  try {
    return await client.weekIntentions.create({ data });
  } catch (error) {
    console.error(error);
    return null;
  }
};
