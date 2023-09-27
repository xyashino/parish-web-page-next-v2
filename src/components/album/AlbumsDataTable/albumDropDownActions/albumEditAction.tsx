import React, { SyntheticEvent } from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { AlbumResponse } from "@/types/db/album";
import { useAlbumDialogStore } from "@/lib/store/useAlbumDialogStore";

interface Props {
  albumData: AlbumResponse;
}

export const AlbumEditAction = ({ albumData }: Props) => {
  const { open } = useAlbumDialogStore();

  const { show, categoryId, title, subtitle } = albumData;
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    open(
      {
        title,
        subtitle: subtitle ?? "",
        show,
        categoryId: categoryId ?? "",
      },
      albumData.id,
    );
  };
  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};
