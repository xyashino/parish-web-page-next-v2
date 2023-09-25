import { z } from "zod";

export const modifyCategorySchema = z.object({
  name: z.string().nonempty({ message: "Nazwa Kategorii jest wymagana." }),
  order: z.number().min(-20).max(20).default(0),
  show: z.boolean().default(true),
});
