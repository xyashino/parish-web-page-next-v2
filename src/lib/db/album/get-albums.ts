import client from "@/lib/db";
import { AlbumsResponse } from "@/types/album";

export const getAlbums = async (): Promise<AlbumsResponse> =>
  await client.album.findMany({
    include: {
      category: true,
    },
  });
