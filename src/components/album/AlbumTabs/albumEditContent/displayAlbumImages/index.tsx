"use client";
import React from "react";
import { ContextMenu } from "@/components/ui/context-menu";
import { MenuTrigger } from "./menuTrigger";
import { MenuContextContent } from "./menuContextContent";
import { ImageResponse } from "@/types/db/album";
import { env } from "@/config/env/client";

interface Props {
  images: ImageResponse[];
}

const { NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX } = env;
export const DisplayAlbumImages = ({ images }: Props) => {
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
      {images.map(({ id, path }) => {
        if (!path) return null;
        return (
          <div className="flex justify-center" key={id}>
            <ContextMenu>
              <MenuTrigger src={NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX + path} />
              <MenuContextContent id={id} />
            </ContextMenu>
          </div>
        );
      })}
    </div>
  );
};
