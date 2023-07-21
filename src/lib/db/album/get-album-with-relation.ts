import client from "@/lib/db";

export const getAlbumWithRelations = async (id: string) => {
  const result = await client.album.findUnique({
    where: { id },
    include: {
      images: true,
      category: true,
    },
  });
  if (!result) throw new Error("Album not found");
  return result;
};
