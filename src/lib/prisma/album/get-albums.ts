import client from "@/lib/prisma";

export const getAlbums = async () => {
    try {
        return await client.album.findMany();
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};