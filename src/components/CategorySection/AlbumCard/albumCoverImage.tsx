import React from "react";
import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import { ImageResponse } from "@/types/db/album";

interface Props {
  cover: ImageResponse | null;
  title: string;
}

export const AlbumCoverImage = ({ cover, title }: Props) => {
  if (!cover || !cover.path) {
    return (
      <div className="w-full h-full grid place-items-center">
        <ImageIcon className="w-full h-32 text-muted-foreground group-hover:scale-105 transition-transform" />
      </div>
    );
  }

  return (
    <Image
      src={cover.path}
      alt={title ?? "Image display cover of album"}
      className="object-center transition-transform group-hover:scale-105 absolute"
      fill
      draggable={false}
    />
  );
};
