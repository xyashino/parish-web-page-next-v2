import client from "@/lib/prisma";
import { Album } from "@prisma/client";

export const getAlbums = async () => {
  try {
    return await client.album.findMany();
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
