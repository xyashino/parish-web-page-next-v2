import client from "@/lib/db";

export const getImage = async (id: string) => {
  try {
    return await client.image.findUnique({
      where: { id },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
