import client from "@/lib/prisma";

export const getAlbumWithRelations = async (id: string) => {
    const result = await client.album.findUnique({
        where: { id },
        include: {
            Image: true,
        },
    });
    if (!result) throw new Error("Album not found");
    return result;
};