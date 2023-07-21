import client from "@/lib/db";

export const getCategory = async (id: string) => {
  try {
    return await client.category.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Category not found");
  }
};
