"use client";
import React from "react";
import { AlbumCoverImage } from "./albumCoverImage";
import { useRouter } from "next/navigation";
import { Navigation } from "@/types/enums";

export const AlbumCard = ({ id, title, subtitle, cover }: CategoriesAlbum) => {
  const { push } = useRouter();

  return (
    <div
      className="space-y-3 cursor-pointer p-4 bg-background rounded-xl group w-[300px] lg:w-[400px] shadow"
      onClick={() => push(`${Navigation.CLIENT_ALBUM}/${id}`)}
    >
      <div className="overflow-hidden rounded-md relative w-full aspect-video ">
        <AlbumCoverImage cover={cover} title={title} />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-lg font-bold">{title}</h3>
        <p className="text-md text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
};
