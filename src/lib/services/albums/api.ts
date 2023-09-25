import { ApiRoute, RevalidateTag } from "@/types/enums";
import { BaseCrudApiCall } from "@/lib/services/default";
import { ALBUM_API_MESSAGES } from "@/lib/constants/album";

export const AlbumApiService = new BaseCrudApiCall(
  ApiRoute.BASE_ALBUMS,
  [RevalidateTag.ALBUMS],
  true,
  ALBUM_API_MESSAGES,
);
