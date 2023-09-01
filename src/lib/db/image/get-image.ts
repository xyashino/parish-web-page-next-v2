import client from "@/lib/db";

export const getImage = async (id: string) =>
  await client.image.findUnique({
    where: { id },
  });
