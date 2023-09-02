import client from "@/lib/db";
import { AdministratorResponse } from "@/types/db/administrator";

export const deleteAdministrator = async (
  id: string,
): Promise<AdministratorResponse> => {
  try {
    return await client.admin.delete({ where: { id } });
  } catch (error) {
    console.error(error);
    return null;
  }
};
