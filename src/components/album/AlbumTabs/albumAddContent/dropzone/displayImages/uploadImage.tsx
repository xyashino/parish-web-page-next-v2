import React from "react";
import { ContextMenu } from "@/components/ui/context-menu";
import { MenuTrigger } from "./menuTrigger";
import { MenuContextContent } from "./menuContextContent";

interface Props {
  src: string;
  index: number;
}

export const UploadImage = ({ src, index }: Props) => {
  return (
    <div className="flex justify-center">
      <ContextMenu>
        <MenuTrigger src={src} />
        <MenuContextContent index={index} />
      </ContextMenu>
    </div>
  );
};
