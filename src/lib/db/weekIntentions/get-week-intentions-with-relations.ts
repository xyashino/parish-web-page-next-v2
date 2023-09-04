import client from "@/lib/db";
import { WeekIntentionsWithRelationsResponse } from "@/types/db/week-intentions";

export const getWeekIntentionWithRelations = async (
  id: string,
): Promise<WeekIntentionsWithRelationsResponse> => {
  try {
    return (await client.weekIntentions.findUnique({
      where: { id },
      select: {
        id: true,
        status: true,
        endWeek: true,
        startWeek: true,
        days: {
          select: {
            id: true,
            weekId: true,
            day: true,
            dateOfDay: true,
            intentions: {
              orderBy: {
                order: "asc",
              },
            },
          },
        },
      },
    })) as WeekIntentionsWithRelationsResponse;
  } catch (e) {
    console.error(e);
    return null;
  }
};
