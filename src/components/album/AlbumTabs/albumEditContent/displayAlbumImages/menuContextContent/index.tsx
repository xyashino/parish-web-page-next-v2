import React from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { ImageIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { useAlbumCoverImageStore } from "@/lib/store/useAlbumCoverImageStore";
import { useParams } from "next/navigation";
import { DeleteImageTrigger } from "./deleteImageTrigger";

interface Props {
  id: string;
}

export const MenuContextContent = ({ id }: Props) => {
  const { setCoverImageByImageId } = useAlbumCoverImageStore();
  const { uuid } = useParams();

  const handleSetCoverImage = async () => {
    setCoverImageByImageId(id, uuid);
  };

  return (
    <ContextMenuContent className="p-0 border-0">
      <ContextMenuItem
        className="w-full justify-around cursor-pointer"
        onClick={handleSetCoverImage}
      >
        <span>Okładka</span>
        <ImageIcon />
      </ContextMenuItem>
      <Separator />
      <DeleteImageTrigger id={id} />
    </ContextMenuContent>
  );
};
