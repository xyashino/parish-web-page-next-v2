import React from "react";
import notFound from "@/app/not-found";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { AlbumInfoCard } from "@/components/album/AlbumInfoCard";
import { AlbumCoverImageCard } from "@/components/album/AlbumCoverImageCard";
import { AlbumTabs } from "@/components/album/AlbumTabs";
import { AlbumsResponse, AlbumWithRelationsResponse } from "@/types/db/album";

export async function generateStaticParams() {
  const announcements = await apiCall<AlbumsResponse>(ApiRoute.BASE_ALBUMS, {
    next: { tags: [RevalidateTag.ALBUMS] },
  });
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const MenageAlbum = async ({ params: { uuid } }: ParamsWithUUID) => {
  const album = await apiCall<AlbumWithRelationsResponse>(
    `${ApiRoute.BASE_ALBUMS}/${uuid}`,
    {
      next: { tags: [RevalidateTag.IMAGES, RevalidateTag.ALBUMS] },
    },
  );

  if (!album) return notFound();

  const { images, title, coverId } = album;
  return (
    <div className="flex flex-col space-y-2">
      <PageTitleWithPrevBtn title={`Album: "${title}"`} />
      <div className="mx-4 w-full lg:w-11/12 lg:mx-auto space-y-4">
        <DashboardCardContainer>
          <AlbumInfoCard {...album} />
          <AlbumCoverImageCard imageCoverId={coverId} />
        </DashboardCardContainer>
        <AlbumTabs images={images ?? []} />
      </div>
    </div>
  );
};

export default MenageAlbum;
