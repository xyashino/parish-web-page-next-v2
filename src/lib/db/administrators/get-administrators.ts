import client from "@/lib/db";

export const getAdministrators = async () => {
  try {
    return await client.admin.findMany();
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
