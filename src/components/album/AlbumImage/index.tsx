import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { Image as ImageEntity } from "@prisma/client";
import { AlbumImageTrigger } from "@/components/album/AlbumImage/albumImageTrigger";

interface AlbumImageProps extends ImageEntity {
  index: number;
}

export const AlbumImage = ({ id, path, index }: AlbumImageProps) => {
  return (
    <div
      key={id}
      className={cn(
        "w-full relative shadow  transition-transform duration-300 w-full aspect-video cursor-pointer",
        Math.floor(Math.random() * 2) % 2
          ? "lg:w-1/3"
          : "lg:aspect-square lg:w-1/4",
      )}
    >
      <AlbumImageTrigger path={path}>
        <Image
          src={path ?? "/images/placeholder.png"}
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
