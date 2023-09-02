import client from "@/lib/db";
import { AlbumsResponse } from "@/types/db/album";

export const getAlbums = async (): Promise<AlbumsResponse> =>
  await client.album.findMany({
    include: {
      category: true,
    },
  });
