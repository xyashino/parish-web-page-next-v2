import client from "@/lib/db";

export const createAdministrator = async (email: string) => {
  try {
    return await client.admin.create({
      data: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
