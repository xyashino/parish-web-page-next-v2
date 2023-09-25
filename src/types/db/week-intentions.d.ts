import { dayTable, intentionTable, weekIntentionsTable } from "@/db/schema";

type SelectIntention = typeof intentionTable.$inferSelect;
type CreateIntention = typeof intentionTable.$inferInsert;

type SelectDay = typeof dayTable.$inferSelect;

type CreateDay = Omit<typeof dayTable.$inferInsert> & {
  intentions: Omit<CreateIntention, "dayId">[];
};

type CreateWeekIntentions = typeof weekIntentionsTable.$inferInsert & {
  days: CreateDay[];
};

type SelectWeekIntentions = weekIntentionsTable.$inferSelect;
type WeekIntentionsResponse = SelectWeekIntentions | null;
type ManyWeekIntentionsResponse = SelectWeekIntentions[];
type WeekIntentionsWithRelationsResponse = WeekIntentionsWithRelations | null;

type WeekIntentionsWithRelations = DateToString<SelectWeekIntentions> & {
  days: WeekIntentionsDay[];
};

type WeekIntentionsDay = SelectDay & {
  intentions: SelectIntention[];
};
