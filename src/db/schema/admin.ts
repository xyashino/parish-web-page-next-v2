import { pgTable, varchar } from "drizzle-orm/pg-core";
import { randomUUID } from "node:crypto";

export const adminTable = pgTable("Admin", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  email: varchar("email", { length: 255 }).unique().notNull(),
});
