import React from "react";
import DataTableActionsDropDawn from "@/components/DataTable/DataTableActionsDropDawn";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import AlbumDeleteAction from "./albumDeleteAction";
import AlbumEditAction from "./albumEditAction";
import { Album } from "@prisma/client";
import AlbumAddImagesAction from "@/components/data-tables/AlbumsDataTable/albumDropDownActions/albumAddImagesAction";

interface Props {
  albumData: Album;
}

const AlbumDropDownActions = ({ albumData }: Props) => {
  return (
    <DataTableActionsDropDawn>
      <AlbumAddImagesAction id={albumData.id} />
      <AlbumEditAction albumData={albumData} />
      <DropdownMenuSeparator />
      <AlbumDeleteAction id={albumData.id} />
    </DataTableActionsDropDawn>
  );
};

export default AlbumDropDownActions;
