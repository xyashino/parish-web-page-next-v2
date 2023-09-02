import client from "@/lib/db";
import { WeekIntentionsResponse } from "@/types/db/week-intentions";

export const deleteWeekIntention = async (
  id: string,
): Promise<WeekIntentionsResponse> => {
  try {
    return await client.weekIntentions.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
