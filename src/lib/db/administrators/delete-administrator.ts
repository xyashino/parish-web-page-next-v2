import client from "@/lib/db";

export const deleteAdministrator = async (id: string) => {
  try {
    return await client.admin.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
