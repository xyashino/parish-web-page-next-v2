import client from "@/lib/db";
import { AdministratorResponse } from "@/types/db/administrator";

export const getAdministratorByEmail = async (
  email: string,
): Promise<AdministratorResponse> =>
  client.admin.findUnique({ where: { email } });
