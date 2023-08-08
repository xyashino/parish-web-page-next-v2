import { BaseCrudApiCall } from "@/lib/services/crud";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { ALBUM_API_MESSAGES } from "@/lib/constants/album";

export const AlbumCrud = new BaseCrudApiCall(
  ApiRoute.BASE_ALBUMS,
  [RevalidateTag.ALBUMS],
  true,
  ALBUM_API_MESSAGES
);
