import client from "@/lib/db";

export const getCategories = async () =>
  await client.category.findMany({
    orderBy: { order: "asc" },
  });
