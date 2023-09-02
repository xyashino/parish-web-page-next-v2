import client from "@/lib/db";
import { CategoryWithAlbumsResponse } from "@/types/db/category";

export const getCategoriesWithAlbums = async (): Promise<
  CategoryWithAlbumsResponse[]
> =>
  await client.category.findMany({
    orderBy: {
      order: "asc",
    },
    select: {
      id: true,
      name: true,
      albums: {
        where: {
          show: true,
        },
        select: {
          id: true,
          title: true,
          subtitle: true,
          cover: {
            select: {
              id: true,
              path: true,
            },
          },
        },
      },
    },
  });
