import client from "@/lib/db";

export const getAlbums = async () => {
  try {
    return await client.album.findMany({
      include: {
        category: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
