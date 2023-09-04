import client from "@/lib/db";
import { WeekIntentionsWithRelationsResponse } from "@/types/db/week-intentions";
import { Status } from "@prisma/client";
import { getWeekIntentionWithRelations } from "@/lib/db/weekIntentions/get-week-intentions-with-relations";

export const getActiveWeekIntentions =
  async (): Promise<WeekIntentionsWithRelationsResponse> => {
    const activeItem = await client.weekIntentions.findFirst({
      where: { status: Status.ACTIVE },
      select: {
        id: true,
      },
    });
    if (!activeItem) return null;
    const result = await getWeekIntentionWithRelations(activeItem.id);
    console.log("result", result);
    return result;
  };
