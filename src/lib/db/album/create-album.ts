import client from "@/lib/db";
import { Prisma } from "@prisma/client";

export const createAlbum = async (data: Prisma.AlbumCreateInput) => {
  try {
    return await client.album.create({
      data,
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
