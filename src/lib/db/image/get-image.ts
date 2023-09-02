import client from "@/lib/db";
import { ImageResponse } from "@/types/db/image";

export const getImage = async (id: string): Promise<ImageResponse> =>
  await client.image.findUnique({
    where: { id },
  });
