import { z } from "zod";

export const modifyAlbumSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().optional(),
  categoryId: z.string().optional(),
  show: z.boolean().default(true),
});
