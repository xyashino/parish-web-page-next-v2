import { Prisma } from "@prisma/client";
import client from "@/lib/db";

export const createWeekIntention = async (
  data: Prisma.WeekIntentionsCreateInput
) => {
  try {
    return await client.weekIntentions.create({ data });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
