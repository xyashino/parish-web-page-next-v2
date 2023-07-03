import client from "@/lib/prisma";

export const getManyWeekIntentions = async () => {
    try {
        return await client.weekIntentions.findMany({
            orderBy: {
                status: "desc",
            },
        });
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};
