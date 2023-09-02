import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { CategoryResponse } from "@/types/db/category";

export const updateCategory = async (
  id: string,
  data: Prisma.CategoryUpdateInput,
): Promise<CategoryResponse> => {
  try {
    return await client.category.update({ where: { id }, data });
  } catch (error) {
    console.error(error);
    return null;
  }
};
