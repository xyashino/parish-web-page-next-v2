import { z } from "zod";

const modifyAlbumSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
  categoryId: z.string().uuid().optional(),
  show: z.boolean().default(true),
});

export default modifyAlbumSchema;
