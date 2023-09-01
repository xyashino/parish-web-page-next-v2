import client from "@/lib/db";
import { Day, WeekIntentions } from "@prisma/client";
import { Intention } from ".prisma/client";

type Result = WeekIntentions & {
  days: (Day & { intentions: Intention[] })[];
};

export const getActiveWeekIntentions = async (): Promise<Result | null> =>
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
