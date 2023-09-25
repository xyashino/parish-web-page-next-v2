import { DefaultCrud } from "@/db/handlers/default";
import { CategoriesResponse } from "@/types/db/album";
import { albumTable, categoryTable } from "@/db/schema";
import { asc, eq } from "drizzle-orm";

class Category extends DefaultCrud<typeof categoryTable> {
  constructor() {
    super(categoryTable);
  }

  override async findAll(): Promise<CategoriesResponse> {
    const { db } = this;
    return db.query.categoryTable.findMany({
      orderBy: asc(categoryTable.order),
    });
  }

  async findAllActive() {
    const { db, model } = this;

    return db.query.categoryTable.findMany({
      where: eq(model.show, true),
      orderBy: asc(model.order),
      with: {
        albums: {
          where: eq(albumTable.show, true),
          with: {
            cover: true,
          },
        },
      },
    });
  }
}

export const CategoryDb = new Category();
