import { Day, Intention, WeekIntentions } from "@prisma/client";

type WeekIntentionsResponse = WeekIntentions | null;

type ManyWeekIntentionsResponse = WeekIntentions[];

type WeekIntentionsDay = DateToString<Day> & { intentions: Intention[] };

type WeekIntentionsWithRelations = DateToString<WeekIntentions> & {
  days: WeekIntentionsDay[];
};

type WeekIntentionsWithRelationsResponse = WeekIntentionsWithRelations | null;
