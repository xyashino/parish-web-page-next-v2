import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Album } from "@prisma/client";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";
import { useAlbumDialogStore } from "@/lib/store";

interface Props {
  albumData: Album;
}

const AlbumEditAction = ({ albumData }: Props) => {
  const { open } = useCustomDialogStore();
  const { updateDefaultValues } = useAlbumDialogStore();
  const handleNavigate = (e?: SyntheticEvent) => {
    e?.preventDefault();
    updateDefaultValues(
      {
        name: albumData.name,
        description: albumData.description ?? "",
        show: albumData.show,
        categoryId: albumData.categoryId ?? "",
      },
      albumData.id
    );
    open();
  };
  return (
    <DataTableActionsDropDawnItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleNavigate}
    />
  );
};

export default AlbumEditAction;
