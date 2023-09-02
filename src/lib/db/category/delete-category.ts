import client from "@/lib/db";
import { CategoryResponse } from "@/types/db/category";

export const deleteCategory = async (id: string): Promise<CategoryResponse> => {
  try {
    return await client.category.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
