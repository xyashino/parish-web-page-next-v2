import client from "@/lib/db";
import { AdministratorsResponse } from "@/types/db/administrator";

export const getAdministrators = async (): Promise<AdministratorsResponse> =>
  client.admin.findMany();
