import React from "react";
import notFound from "@/app/not-found";
import { getAlbums } from "@/lib/db/album";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { AlbumInfoCard } from "@/components/album/AlbumInfoCard";
import { AlbumCoverImageCard } from "@/components/album/AlbumCoverImageCard";
import { AlbumTabs } from "@/components/album/AlbumTabs";
import { apiCall } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { Album, Category, Image } from "@prisma/client";

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
    }
  );

  if (!album) return notFound();
  return (
    <div className="flex flex-col space-y-2">
      <AdminPageTitle title={`Album: "${album.title}"`} />
      <div className="mx-4 w-full lg:w-11/12 lg:mx-auto space-y-4">
        <div className="w-full justify-around flex">
          <AlbumInfoCard albumData={album} images={images ?? []} />
          <AlbumCoverImageCard imageCoverId={album.coverId} />
        </div>
        <AlbumTabs images={images ?? []} />
      </div>
    </div>
  );
};

export default MenageAlbum;
