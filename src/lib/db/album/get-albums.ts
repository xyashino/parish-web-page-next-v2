import client from "@/lib/db";

export const getAlbums = async () =>
  await client.album.findMany({
    include: {
      category: true,
    },
  });
