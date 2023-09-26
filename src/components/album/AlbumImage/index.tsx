import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlbumImageTrigger } from "@/components/album/AlbumImage/albumImageTrigger";
import { ImageResponse } from "@/types/db/album";
import { env } from "@/config/env/client";

interface AlbumImageProps extends ImageResponse {
  index: number;
}

const { NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX } = env;

export const AlbumImage = ({ id, path, index }: AlbumImageProps) => {
  return (
    <div
      key={id}
      className={cn(
        "w-full relative shadow  transition-transform duration-300 aspect-video cursor-pointer",
        Math.floor(Math.random() * 2) % 2
          ? "lg:w-1/3"
          : "lg:aspect-square lg:w-1/4",
      )}
    >
      <AlbumImageTrigger path={path}>
        <Image
          src={
            (path && `${NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX}${path}`) ??
            "/images/placeholder.png"
          }
          alt="Picture of the album"
          className="absolute object-cover object-center"
          fill
          loading={index < 4 ? "eager" : "lazy"}
          draggable={false}
        />
      </AlbumImageTrigger>
    </div>
  );
};
