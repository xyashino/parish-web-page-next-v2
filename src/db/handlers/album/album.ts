import { DefaultCrud } from "@/db/handlers/default";
import {
  AlbumsWithCategoryResponse,
  AlbumWithRelationsResponse,
} from "@/types/db/album";
import { albumTable, categoryTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { uuidSchema } from "@/lib/schemas/default";

class Album extends DefaultCrud<typeof albumTable> {
  constructor() {
    super(albumTable);
  }

  override async findAll(): Promise<AlbumsWithCategoryResponse> {
    const { db, model } = this;
    return db
      .select({
        id: albumTable.id,
        title: albumTable.title,
        subtitle: albumTable.subtitle,
        show: albumTable.show,
        category: categoryTable.name,
        coverId: albumTable.coverId,
      })
      .from(model)
      .leftJoin(
        categoryTable,
        eq(model.categoryId, categoryTable.id),
      ) as unknown as AlbumsWithCategoryResponse;
  }

  async getOneWithRelations(id: string): Promise<AlbumWithRelationsResponse> {
    const { db, withErrorHandling } = this;
    return withErrorHandling(async () => {
      const { uuid } = uuidSchema.parse({ uuid: id });
      return db.query.albumTable.findFirst({
        where: eq(albumTable.id, uuid),
        with: {
          images: true,
          cover: true,
          category: true,
        },
      });
    });
  }
}

export const AlbumDb = new Album();
