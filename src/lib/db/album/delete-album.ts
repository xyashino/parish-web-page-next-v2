import client from "@/lib/db";
import { AlbumResponse } from "@/types/album";

export const deleteAlbum = async (id: string): Promise<AlbumResponse> => {
  try {
    return await client.album.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
