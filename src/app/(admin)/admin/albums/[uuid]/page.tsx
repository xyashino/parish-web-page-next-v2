import React from "react";
import notFound from "@/app/not-found";
import AdminPageTitle from "@/components/AdminPageTitle";
import { getAlbums, getAlbumWithRelations } from "@/lib/db/album";
import AlbumInfoCard from "@/components/album/AlbumInfoCard";
import AlbumTabs from "@/components/album/AlbumTabs";
import AlbumCoverImageCard from "@/components/album/AlbumCoverImageCard";
import AlbumResets from "@/components/album/AlbumResets";

const revalidate = 0;
export async function generateStaticParams() {
  const announcements = await getAlbums();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const MenageAlbum = async ({ params: { uuid } }: ParamsWithUUID) => {
  const { images, ...album } = await getAlbumWithRelations(uuid);

  if (!album) return notFound();

  return (
    <div className="flex flex-col space-y-2">
      <AdminPageTitle title={`"${album.title}"`} />
      <AlbumResets initialImages={images} initalAlbumData={album} />

      <div className="mx-4 w-full lg:w-11/12 lg:mx-auto space-y-4">
        <div className="w-full justify-around flex">
          <AlbumInfoCard albumData={album} />
          <AlbumCoverImageCard />
        </div>
        <AlbumTabs />
      </div>
    </div>
  );
};

export default MenageAlbum;
