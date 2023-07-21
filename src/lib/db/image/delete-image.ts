import client from "@/lib/db";

export const deleteImage = async (id: string) => {
  try {
    return await client.image.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
