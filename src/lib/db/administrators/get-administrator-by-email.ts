import client from "@/lib/db";

export const getAdministratorByEmail = async (email: string) =>
  client.admin.findUnique({ where: { email } });
