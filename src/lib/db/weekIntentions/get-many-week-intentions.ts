import client from "@/lib/db";
import { ManyWeekIntentionsResponse } from "@/types/db/week-intentions";

export const getManyWeekIntentions =
  async (): Promise<ManyWeekIntentionsResponse> =>
    await client.weekIntentions.findMany({
      orderBy: {
        status: "desc",
      },
    });
