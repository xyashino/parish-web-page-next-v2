import React, { SyntheticEvent } from "react";
import {
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import { ImageIcon, TrashIcon } from "@radix-ui/react-icons";
import { ConfirmAlert } from "@/components/ConfirmAlert";
import { useUploadedImagesStore } from "@/lib/store/useUploadedImagesStore";
import { Separator } from "@/components/ui/separator";
import { useAlbumCoverImageStore } from "@/lib/store/useAlbumCoverImageStore";
import { useParams, useRouter } from "next/navigation";

interface Props {
  id: string;
}

export const MenuContextContent = ({ id }: Props) => {
  const { removeImage } = useUploadedImagesStore();
  const { setCoverImageByImageId } = useAlbumCoverImageStore();
  const { uuid } = useParams();
  const handleDeleteClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };
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
      <ContextMenuItem onClick={handleDeleteClick} className="text-red-800">
        <ConfirmAlert
          headerData={{
            title: "Czy na pewno chcesz usunąć to zdjęcie?",
            description: "Zdjęcie zostanie trwale usunięte.",
          }}
          triggerData={{
            triggerValue: (
              <>
                <span>Usuń</span> <TrashIcon />
              </>
            ),
            disableAllClasses: true,
            className: "w-full flex items-center justify-around",
            hidden: true,
          }}
          footerData={{
            confirmText: "Usuń",
            doAfterConfirm: () => removeImage(id),
          }}
        />
      </ContextMenuItem>
    </ContextMenuContent>
  );
};
