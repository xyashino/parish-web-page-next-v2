import path from "node:path";
import client from "@/lib/db";
import { ImageResponse } from "@/types/db/image";

export const createImage = async (
  albumDir: string,
  albumId: string,
  extname: string,
): Promise<ImageResponse> => {
  try {
    const imageEntity = await client.image.create({
      data: {
        albumId,
      },
    });
    return await client.image.update({
      where: { id: imageEntity.id },
      data: {
        path: path.join(albumDir, `/${albumId}/${imageEntity.id}.${extname}`),
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
