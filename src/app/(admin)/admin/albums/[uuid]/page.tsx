import React from "react";
import { notFound } from "next/navigation";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { AlbumInfoCard } from "@/components/album/AlbumInfoCard";
import { AlbumCoverImageCard } from "@/components/album/AlbumCoverImageCard";
import { AlbumTabs } from "@/components/album/AlbumTabs";
import { AlbumDb } from "@/db/handlers/album";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const announcements = await AlbumDb.findAll();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const MenageAlbum = async ({ params: { uuid } }: ParamsWithUUID) => {
  const album = await AlbumDb.getOneWithRelations(uuid);

  if (!album) return notFound();

  const { images, title, coverId } = album;
  return (
    <AdminPageWrapper
      headerData={{
        title: `Album: "${title}"`,
      }}
    >
      <div className="w-full lg:w-11/12 lg:mx-auto space-y-4">
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
