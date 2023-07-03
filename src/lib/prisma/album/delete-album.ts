import client from "@/lib/prisma";

export const deleteAlbum = async (id: string) => {
    try {
        return await client.album.delete({
            where: { id },
        });
    } catch (error) {
        console.error(error);
        throw new Error("Album not found");
    }
};