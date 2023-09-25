import { boolean, pgTable, smallint, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { randomUUID } from "node:crypto";

export const categoryTable = pgTable("Category", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: varchar("name", { length: 255 }).notNull().unique(),
  order: smallint("order").default(0).notNull(),
  show: boolean("show").default(false).notNull(),
});

export const albumTable = pgTable("Album", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: varchar("title", { length: 255 }).notNull().default(""),
  subtitle: varchar("subtitle", { length: 255 }),
  show: boolean("show").default(false).notNull(),
  categoryId: varchar("categoryId", { length: 36 }).references(
    () => categoryTable.id,
    {
      onDelete: "set null",
    },
  ),
  coverId: varchar("coverId", { length: 36 }).references(() => imageTable.id, {
    onDelete: "set null",
  }),
});

export const imageTable = pgTable("Image", {
  id: varchar("id", { length: 36 })
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  albumId: varchar("albumId", { length: 36 }).references(() => albumTable.id, {
    onDelete: "cascade",
  }),
  path: varchar("patch", { length: 255 }).notNull(),
});

export const categoryRelation = relations(categoryTable, ({ many }) => ({
  albums: many(albumTable),
}));

export const imageRelation = relations(imageTable, ({ one }) => ({
  album: one(albumTable, {
    fields: [imageTable.albumId],
    references: [albumTable.id],
  }),
}));

export const albumRelation = relations(albumTable, ({ one, many }) => ({
  category: one(categoryTable, {
    fields: [albumTable.categoryId],
    references: [categoryTable.id],
  }),
  images: many(imageTable),
  cover: one(imageTable, {
    fields: [albumTable.coverId],
    references: [imageTable.id],
  }),
}));
