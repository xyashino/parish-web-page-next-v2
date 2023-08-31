import React from "react";
import { Album, Category, Image } from "@prisma/client";
import notFound from "@/app/not-found";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import { getAlbums } from "@/lib/db/album";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { AlbumInfoCard } from "@/components/album/AlbumInfoCard";
import { AlbumCoverImageCard } from "@/components/album/AlbumCoverImageCard";
import { AlbumTabs } from "@/components/album/AlbumTabs";

type AlbumWithRelations = Album & {
  images: Image[] | null;
  category: Category | null;
};

export async function generateStaticParams() {
  const announcements = await getAlbums();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const MenageAlbum = async ({ params: { uuid } }: ParamsWithUUID) => {
  const { images, ...album } = await apiCall<AlbumWithRelations>(
    `${ApiRoute.BASE_ALBUMS}/${uuid}`,
    {
      next: { tags: [RevalidateTag.IMAGES, RevalidateTag.ALBUMS] },
    },
  );

  if (!album) return notFound();
  return (
    <div className="flex flex-col space-y-2">
      <AdminPageTitle title={`Album: "${album.title}"`} />
      <div className="mx-4 w-full lg:w-11/12 lg:mx-auto space-y-4">
        <DashboardCardContainer>
          <AlbumInfoCard albumData={album} images={images ?? []} />
          <AlbumCoverImageCard imageCoverId={album.coverId} />
        </DashboardCardContainer>
        <AlbumTabs images={images ?? []} />
      </div>
    </div>
  );
};

export default MenageAlbum;
