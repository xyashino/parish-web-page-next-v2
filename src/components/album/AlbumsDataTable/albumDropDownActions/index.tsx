import React from "react";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { AlbumDeleteAction } from "./albumDeleteAction";
import { AlbumEditAction } from "./albumEditAction";
import { AlbumAddImagesAction } from "./albumAddImagesAction";
import { DataTableActionsDropDown } from "@/components/DataTable";
import { AlbumResponse } from "@/types/db/album";

interface Props {
  albumData: AlbumResponse;
}

export const AlbumDropDownActions = ({ albumData }: Props) => (
  <DataTableActionsDropDown>
    <AlbumAddImagesAction id={albumData.id} />
    <AlbumEditAction albumData={albumData} />
    <DropdownMenuSeparator />
    <AlbumDeleteAction id={albumData.id} />
  </DataTableActionsDropDown>
);
