import { Prisma } from "@prisma/client";
import client from "@/lib/db";

export const createCategory = async (data: Prisma.CategoryCreateInput) => {
  try {
    return await client.category.create({ data });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
