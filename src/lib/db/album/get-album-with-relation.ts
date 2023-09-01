import client from "@/lib/db";

export const getAlbumWithRelations = async (id: string) =>
  client.album.findUnique({
    where: { id },
    include: {
      images: true,
      category: true,
    },
  });
