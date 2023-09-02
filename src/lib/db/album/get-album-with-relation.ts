import client from "@/lib/db";
import { AlbumWithRelationsResponse } from "@/types/db/album";

export const getAlbumWithRelations = async (
  id: string,
): Promise<AlbumWithRelationsResponse> =>
  client.album.findUnique({
    where: { id },
    include: {
      images: true,
      category: true,
    },
  });
