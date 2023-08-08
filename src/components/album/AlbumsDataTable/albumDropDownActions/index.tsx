import React from "react";
import { Album } from "@prisma/client";

import DataTableActionsDropDown from "@/components/DataTable/DataTableActionsDropDown";

import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { AlbumDeleteAction } from "./albumDeleteAction";
import { AlbumEditAction } from "./albumEditAction";
import { AlbumAddImagesAction } from "./albumAddImagesAction";

interface Props {
  albumData: Album;
}

const AlbumDropDownActions = ({ albumData }: Props) => {
  return (
    <DataTableActionsDropDown>
      <AlbumAddImagesAction id={albumData.id} />
      <AlbumEditAction albumData={albumData} />
      <DropdownMenuSeparator />
      <AlbumDeleteAction id={albumData.id} />
    </DataTableActionsDropDown>
  );
};

export default AlbumDropDownActions;
