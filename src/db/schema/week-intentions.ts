import {
  pgTable,
  smallint,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { dayEnum, statusEnum } from "./enums";
import { randomUUID } from "node:crypto";
import { relations } from "drizzle-orm";

export const weekIntentionsTable = pgTable("WeekIntentions", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  startWeek: timestamp("startWeek"),
  endWeek: timestamp("endWeek"),
  status: statusEnum("status").default("NONE").notNull(),
});

export const dayTable = pgTable("Day", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  day: dayEnum("day").notNull(),
  dateOfDay: timestamp("dateOfDay"),
  weekId: uuid("weekId").references(() => weekIntentionsTable.id, {
    onDelete: "cascade",
  }),
});

export const intentionTable = pgTable("Intention", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  order: smallint("order").default(0).notNull(),
  hour: varchar("hour", { length: 10 }),
  value: varchar("value", { length: 255 }).default("").notNull(),
  dayId: uuid("dayId")
    .notNull()
    .references(() => dayTable.id, {
      onDelete: "cascade",
    }),
});

export const weekIntentionsRelation = relations(
  weekIntentionsTable,
  ({ many }) => ({
    days: many(dayTable),
  }),
);

export const dayRelation = relations(dayTable, ({ one, many }) => ({
  week: one(weekIntentionsTable, {
    fields: [dayTable.weekId],
    references: [weekIntentionsTable.id],
  }),
  intentions: many(intentionTable),
}));

export const intentionRelation = relations(intentionTable, ({ one }) => ({
  day: one(dayTable, {
    fields: [intentionTable.dayId],
    references: [dayTable.id],
  }),
}));
