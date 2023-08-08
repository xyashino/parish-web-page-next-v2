import { createDialogStore } from "@/lib/store/default/createDialogStore";
import { ALBUM_DEFAULT_VALUE } from "@/lib/constants/album";
import { modifyAlbumSchema } from "@/lib/schemas/album";

export const useAlbumDialogStore = createDialogStore(
  modifyAlbumSchema,
  ALBUM_DEFAULT_VALUE
);
