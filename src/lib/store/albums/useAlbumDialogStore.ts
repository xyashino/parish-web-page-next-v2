import { z } from "zod";
import { createDialogStore } from "@/lib/store/createDialogStore";
import modifyAlbumSchema from "@/components/ModifyAlbumDialog/modify-album.schema";

const ALBUM_DEFAULT_VALUE: z.infer<typeof modifyAlbumSchema> = {
  title: "",
  subtitle: "",
  categoryId: "",
  show: true,
};
export const useAlbumDialogStore = createDialogStore(
  modifyAlbumSchema,
  ALBUM_DEFAULT_VALUE
);
