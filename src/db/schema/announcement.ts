import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { statusEnum } from "./enums";
import { randomUUID } from "node:crypto";

export const announcementTable = pgTable("Announcements", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  subtitle: varchar("subtitle", { length: 255 }),
  status: statusEnum("status").default("NONE").notNull(),
  value: text("value").notNull().default(""),
});
