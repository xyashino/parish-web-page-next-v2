import {Prisma} from "@prisma/client";
import client from "@/lib/prisma";

export const updateCategory = async (
    id: string,
    data: Prisma.CategoryUpdateInput
) => {
    try {
        return await client.category.update({ where: { id }, data });
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};
