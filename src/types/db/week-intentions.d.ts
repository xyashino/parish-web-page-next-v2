import { WeekIntentions } from "@prisma/client";

type WeekIntentionsResponse = WeekIntentions | null;

type ManyWeekIntentionsResponse = WeekIntentions[];

type WeekIntentionsWithRelations = WeekIntentions & {
  days: (Day & { intentions: Intention[] })[];
};

type WeekIntentionsWithRelationsResponse = WeekIntentionsWithRelations | null;
type ManyWeekIntentionsWithRelationsResponse = WeekIntentionsWithRelations[];
