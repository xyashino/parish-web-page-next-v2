import client from "@/lib/db";

export const getAdministratorByEmail = async (email: string) => {
  try {
    return await client.admin.findUnique({ where: { email } });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
