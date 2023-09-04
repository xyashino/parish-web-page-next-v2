import { Day, Intention, WeekIntentions } from "@prisma/client";

type WeekIntentionsResponse = WeekIntentions | null;

type ManyWeekIntentionsResponse = WeekIntentions[];

type WeekIntentionsDay = Day & { intentions: Intention[] };

type WeekIntentionsWithRelations = WeekIntentions & {
  days: WeekIntentionsDay[];
};

type WeekIntentionsWithRelationsResponse = WeekIntentionsWithRelations | null;
