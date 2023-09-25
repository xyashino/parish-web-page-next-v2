import React from "react";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import {
  AlbumWithRelationsResponse,
  ImageListResponse,
} from "@/types/db/album";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { AlbumImage } from "@/components/album/AlbumImage";

// export async function generateStaticParams() {
//   const announcements = await apiCall<AlbumListResponse>(ApiRoute.BASE_ALBUMS, {
//     next: { tags: [RevalidateTag.ALBUMS] },
//   });
//   return announcements.map((announcement) => ({
//     uuid: announcement.id,
//   }));
// }

const AlbumPage = async ({ params: { uuid } }: ParamsWithUUID) => {
  const album = await apiCall<AlbumWithRelationsResponse>(
    `${ApiRoute.BASE_ALBUMS}/${uuid}`,
    {
      next: { tags: [RevalidateTag.IMAGES, RevalidateTag.ALBUMS] },
    },
  );

  const { images, title } = album;
  return (
    <div className="bg-white animate-fadeIn w-full h-full rounded shadow">
      <PageTitleWithPrevBtn title={`Album "${title}"`} />
      <div className="flex flex-wrap gap-8 w-full p-4 mx-auto justify-evenly">
        {(images as ImageListResponse).map((image, i) => (
          <AlbumImage {...image} index={i} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default AlbumPage;
