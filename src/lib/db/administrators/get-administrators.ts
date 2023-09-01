import client from "@/lib/db";

export const getAdministrators = async () => client.admin.findMany();
