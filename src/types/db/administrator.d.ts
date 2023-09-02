import { Admin } from ".prisma/client";

export type AdministratorResponse = Admin | null;
export type AdministratorsResponse = Admin[];
