import client from "@/lib/db";
import { WeekIntentionsWithRelationsResponse } from "@/types/db/week-intentions";

export const getActiveWeekIntentions =
  async (): Promise<WeekIntentionsWithRelationsResponse> =>
    client.weekIntentions.findFirst({
      where: { status: "ACTIVE" },
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
