import client from "@/lib/db";

export const deleteAdministrator = async (email: string) => {
  try {
    return await client.admin.delete({ where: { email } });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
