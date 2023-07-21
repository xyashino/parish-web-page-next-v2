import client from "@/lib/db";

export const deleteAlbum = async (id: string) => {
  try {
    return await client.album.delete({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Album not found");
  }
};
