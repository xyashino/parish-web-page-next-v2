import React from "react";
import { notFound } from "next/navigation";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { AlbumInfoCard } from "@/components/album/AlbumInfoCard";
import { AlbumCoverImageCard } from "@/components/album/AlbumCoverImageCard";
import { AlbumTabs } from "@/components/album/AlbumTabs";
import { AlbumsResponse, AlbumWithRelationsResponse } from "@/types/db/album";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

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
    <AdminPageWrapper
      headerData={{
        title: `Album: "${title}"`,
      }}
    >
      <div className="mx-4 w-full lg:w-11/12 lg:mx-auto space-y-4">
        <DashboardCardContainer>
          <AlbumInfoCard {...album} />
          <AlbumCoverImageCard imageCoverId={coverId} />
        </DashboardCardContainer>
        <AlbumTabs images={images ?? []} />
      </div>
    </AdminPageWrapper>
  );
};

export default MenageAlbum;
