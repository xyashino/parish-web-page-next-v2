import { env } from "@/config/env/server";
import { AdministratorDb } from "@/db/handlers/adminstrator";

const { ALLOW_EMAIL_LIST } = env;

const checkByDatabaseList = async (email: string) => {
  try {
    return !!(await AdministratorDb.findOneByEmail(email));
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const checkEmailIsAllowed = async (email: string) => {
  if (ALLOW_EMAIL_LIST.includes(email)) return true;
  return checkByDatabaseList(email);
};
