import client from "@/lib/db";
import { CategoriesResponse } from "@/types/db/category";

export const getCategories = async (): Promise<CategoriesResponse> =>
  await client.category.findMany({
    orderBy: { order: "asc" },
  });
