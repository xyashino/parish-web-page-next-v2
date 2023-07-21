import client from "@/lib/db";
import { Prisma } from "@prisma/client";

export const updateAlbum = async (
  id: string,
  data: Prisma.AlbumUpdateInput
) => {
  try {
    return await client.album.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
