import { z } from "zod";

export const addAdministratorSchema = z.object({
  email: z.string().email({ message: "Nieprawidłowy adres Email." }),
});
