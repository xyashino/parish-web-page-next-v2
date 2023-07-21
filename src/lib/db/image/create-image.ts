import client from "@/lib/db";
import path from "node:path";

export const createImage = async (
  albumDir: string,
  albumId: string,
  extname: string
) => {
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
    throw new Error("Something went wrong");
  }
};
