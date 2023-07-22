import React, { SyntheticEvent } from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { TrashIcon } from "@radix-ui/react-icons";
import { useUploadImagesStore } from "@/lib/store/useUploadImagesStore";

interface Props {
  index: number;
}

export const MenuContextContent = ({ index }: Props) => {
  const { deleteImage } = useUploadImagesStore();
  const handleDelete = (e: SyntheticEvent) => {
    e.stopPropagation();
    deleteImage(index);
  };
  return (
    <ContextMenuContent className="p-0 border-0">
      <ContextMenuItem
        className="justify-around text-red-800 cursor-pointer cursor-pointer"
        onClick={handleDelete}
      >
        <p>Usuń</p> <TrashIcon />
      </ContextMenuItem>
    </ContextMenuContent>
  );
};
