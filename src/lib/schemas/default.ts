import { z } from "zod";

export const dateSchema = z.preprocess(
  (arg) => (typeof arg == "string" ? new Date(arg) : null),
  z.date().nullable(),
);

export const emailSchema = z.object({
  email: z.string().email({ message: "Nieprawidłowy adres Email." }),
});

export const uuidSchema = z.object({
  uuid: z.string().uuid(),
});
