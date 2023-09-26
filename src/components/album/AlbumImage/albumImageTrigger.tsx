"use client";
import { Button } from "@/components/ui/button";
import { PropsWithChildren, useState } from "react";
import Image from "next/image";
import { ImageResponse } from "@/types/db/album";
import { env } from "@/config/env/client";

interface Props extends PropsWithChildren {
  path: ImageResponse["path"];
}

const { NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX } = env;

export const AlbumImageTrigger = ({ path, children }: Props) => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <Button variant="ghost" onClick={handleClick}>
        {children}
      </Button>
      {display && (
        <div
          className="fixed z-40 animate-fadeIn inset-0 bg-black/80 p-4 grid place items-center overflow-hidden select-none"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <div className="w-11/12 aspect-video mx-auto">
            <Image
              src={
                (path && `${NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX}/${path}`) ?? ""
              }
              alt="fullscreen image"
              width={1920}
              height={1080}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
