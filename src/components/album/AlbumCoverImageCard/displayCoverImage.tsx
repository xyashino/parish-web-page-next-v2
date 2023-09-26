import React from "react";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { env } from "@/config/env/client";

interface Props {
  path: string;
}

const { NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX } = env;
export const DisplayCoverImage = ({ path }: Props) => {
  return (
    <CardContent className="flex flex-col">
      <div className="w-5/6 mx-auto aspect-video relative">
        <Image
          src={NEXT_PUBLIC_UPLOAD_IMAGES_PREFIX + path}
          alt="Display cover album image"
          fill
          draggable={false}
        />
      </div>
    </CardContent>
  );
};
