import { ApiRoute, RevalidateTag } from "@/types/enums";
import { BaseCrudApiCall } from "@/lib/services/crud";
import { ALBUM_API_MESSAGES } from "@/lib/constants/album";

export const AlbumCrud = new BaseCrudApiCall(
  ApiRoute.BASE_ALBUMS,
  [RevalidateTag.ALBUMS],
  true,
  ALBUM_API_MESSAGES
);
