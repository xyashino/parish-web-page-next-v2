import client from "@/lib/db";

export const getCategories = async () => {
  try {
    return await client.category.findMany({
      orderBy: { order: "asc" },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
