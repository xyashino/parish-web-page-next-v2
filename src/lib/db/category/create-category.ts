import { Prisma } from "@prisma/client";
import client from "@/lib/db";
import { CategoryResponse } from "@/types/db/category";

export const createCategory = async (
  data: Prisma.CategoryCreateInput,
): Promise<CategoryResponse> => {
  try {
    return await client.category.create({ data });
  } catch (error) {
    console.error(error);
    return null;
  }
};
