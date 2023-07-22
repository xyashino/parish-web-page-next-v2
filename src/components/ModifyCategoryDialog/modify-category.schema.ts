import { z } from "zod";

const modifyCategorySchema = z.object({
  name: z.string().nonempty({ message: "Nazwa Kategorii nie może być pusta" }),
  order: z.number().min(-20).max(20).default(0),
  show: z.boolean().default(false),
});

export default modifyCategorySchema;
