import client from "@/lib/db";
import { AdministratorResponse } from "@/types/db/administrator";

export const createAdministrator = async (
  email: string,
): Promise<AdministratorResponse> => {
  try {
    return await client.admin.create({
      data: {
        email,
      },
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};
