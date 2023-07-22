import React from "react";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Props {
  path: string;
}

export const DisplayCoverImage = ({ path }: Props) => {
  return (
    <CardContent className="flex flex-col">
      <div className="w-5/6 mx-auto aspect-video relative">
        <Image
          src={path}
          alt="Display cover album image"
          fill
          draggable={false}
        />
      </div>
    </CardContent>
  );
};
