"use client";
import { Button } from "@/components/ui/button";
import { Image as ImageEntity } from "@prisma/client";
import { PropsWithChildren, useState } from "react";
import Image from "next/image";

interface Props extends PropsWithChildren {
  path: ImageEntity["path"];
}

export const AlbumImageTrigger = ({ path, children }: Props) => {
  const [display, setDisplay] = useState(false);
  const handleClick = () => {
    console.log(display, path);
    setDisplay((prev) => !prev);
  };
  return (
    <>
      <Button variant="ghost" onClick={handleClick}>
        {children}
      </Button>
      {display && (
        <div
          className="fixed z-40 animate-fadeIn inset-0 bg-black/20 p-4 grid place items-center overflow-hidden select-none"
          onClick={() => setDisplay((prev) => !prev)}
        >
          <div className="w-11/12 aspect-video mx-auto">
            <Image
              src={path ?? ""}
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
