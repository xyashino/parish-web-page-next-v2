import client from "@/lib/db";
import { Prisma } from "@prisma/client";
import { AlbumResponse } from "@/types/db/album";

export const createAlbum = async (
  data: Prisma.AlbumCreateInput,
): Promise<AlbumResponse> => {
  try {
    return await client.album.create({
      data,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
