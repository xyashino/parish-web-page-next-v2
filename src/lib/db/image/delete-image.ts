import client from "@/lib/db";
import { ImageResponse } from "@/types/db/image";

export const deleteImage = async (id: string): Promise<ImageResponse> => {
  try {
    return await client.image.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
