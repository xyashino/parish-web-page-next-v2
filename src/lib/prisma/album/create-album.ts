import { Prisma } from "@prisma/client";
import client from "@/lib/prisma";

export const createAlbum = async (data: Prisma.AlbumCreateInput) => {
    try {
        return await client.album.create({ data });
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};