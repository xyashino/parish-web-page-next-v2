import { createDialogStore } from "@/lib/store/createDialogStore";
import { z } from "zod";
import modifyAlbumSchema from "@/components/ModifyAlbumDialog/modify-album.schema";

const ALBUM_DEFAULT_VALUE: z.infer<typeof modifyAlbumSchema> = {
  name: "",
  description: "",
  categoryId: "",
  show: true,
};
export const useAlbumDialogStore = createDialogStore(
  modifyAlbumSchema,
  ALBUM_DEFAULT_VALUE
);
