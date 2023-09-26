import React from "react";
import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import { ImageResponse } from "@/types/db/album";
import { env } from "@/config/env/client";

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
  const { NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX } = env;

  return (
    <Image
      src={NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX + cover.path}
      alt={title ?? "Image display cover of album"}
      className="object-center transition-transform group-hover:scale-105 absolute"
      fill
      draggable={false}
    />
  );
};
