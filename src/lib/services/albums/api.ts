import { ApiRoute } from "@/types/enums";
import { BaseCrudApiCall } from "@/lib/services/default";
import { ALBUM_API_MESSAGES } from "@/config/constants/album";

export const AlbumApiService = new BaseCrudApiCall(
  ApiRoute.BASE_ALBUMS,
  true,
  ALBUM_API_MESSAGES,
);
