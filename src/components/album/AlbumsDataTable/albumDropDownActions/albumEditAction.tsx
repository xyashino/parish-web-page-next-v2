import React, { SyntheticEvent } from "react";
import { DataTableActionsDropDownItem } from "@/components/DataTable/DataTableActionsDropDownItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Album } from "@prisma/client";
import { useAlbumDialogStore } from "@/lib/store";

interface Props {
  albumData: Album;
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
      albumData.id
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
