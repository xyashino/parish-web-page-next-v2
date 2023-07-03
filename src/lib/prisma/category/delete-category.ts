import client from "@/lib/prisma";

export const deleteCategory = async (id: string) => {
    try {
        return await client.category.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error);
        throw new Error("Category not found");
    }
};