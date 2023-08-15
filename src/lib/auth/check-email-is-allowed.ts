import { getAdministratorByEmail } from "@/lib/db/administrators";

const checkByEnvList = (email: string) => {
  const { ALLOW_EMAIL_LIST } = process.env;
  const allowEmailList = ALLOW_EMAIL_LIST?.split(",").map((email) =>
    email.trim()
  );
  return allowEmailList?.includes(email);
};

const checkByDatabaseList = async (email: string) => {
  try {
    return !!(await getAdministratorByEmail(email));
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const checkEmailIsAllowed = async (email: string) => {
  if (checkByEnvList(email)) return true;
  return checkByDatabaseList(email);
};
