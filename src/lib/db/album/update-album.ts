import client from "@/lib/db";
import { Prisma } from "@prisma/client";
import { AlbumResponse } from "@/types/db/album";

export const updateAlbum = async (
  id: string,
  data: Prisma.AlbumUpdateInput,
): Promise<AlbumResponse> => {
  try {
    return await client.album.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
