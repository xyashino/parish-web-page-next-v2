import React from "react";
import { ImageListResponse } from "@/types/db/album";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { AlbumImage } from "@/components/album/AlbumImage";
import { AlbumDb } from "@/db/handlers/album";

export async function generateStaticParams() {
  const announcements = await AlbumDb.findAll();
  return announcements.map((announcement) => ({
    uuid: announcement.id,
  }));
}

const AlbumPage = async ({ params: { uuid } }: ParamsWithUUID) => {
  const album = await AlbumDb.findOne(uuid);
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
