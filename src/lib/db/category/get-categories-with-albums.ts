import client from "@/lib/db";
import { RelationCategoriesResponse } from "@/types/category";

export const getCategoriesWithAlbums = async (): Promise<
  RelationCategoriesResponse[] | []
> =>
  await client.category.findMany({
    orderBy: {
      order: "asc",
    },
    select: {
      id: true,
      albums: {
        where: {
          show: true,
        },
        select: {
          id: true,
          title: true,
          cover: {
            select: {
              id: true,
              path: true,
            },
          },
          subtitle: true,
        },
      },
      name: true,
    },
  });
