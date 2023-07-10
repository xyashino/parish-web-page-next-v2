import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { TrashIcon } from "@radix-ui/react-icons";
import { useAlbumsStore } from "@/lib/store/albums/useAlbumsStore";

interface Props {
  id: string;
}

const AlbumDeleteAction = ({ id }: Props) => {
  const { deleteEntity } = useAlbumsStore();
  const handleDelete = (e?: SyntheticEvent) => {
    e?.preventDefault();
    return deleteEntity(id);
  };

  return (
    <DataTableActionsDropDawnItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};

export default AlbumDeleteAction;
