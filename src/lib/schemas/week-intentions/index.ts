import { z } from "zod";

export const weekIntentionsFormSchema = z.object({
  order: z
    .number()
    .min(-20, { message: "Minimalnie -20." })
    .max(20, { message: "Maksymalnie 20." }),

  hour: z.string().nonempty({ message: "Godzina jest wymagana" }),
});
