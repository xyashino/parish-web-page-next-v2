import Image from "next/image";
import React from "react";
import { ContextMenuTrigger } from "@/components/ui/context-menu";

interface Props {
  src: string;
}

export const MenuTrigger = ({ src }: Props) => {
  return (
    <ContextMenuTrigger className="w-full">
      <div className="relative w-full aspect-video">
        <Image src={src} alt="preview" fill draggable={false} />
      </div>
    </ContextMenuTrigger>
  );
};
