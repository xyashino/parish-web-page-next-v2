import React from "react";
import { DataTableActionsDropDown } from "@/components/DataTable";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { AnnouncementsDeleteAction } from "./announcementsDeleteAction";
import { AnnouncementsEditAction } from "./announcementsEditAction";

interface Props {
  id: string;
}

export const AnnouncementsDropDownActions = ({ id }: Props) => {
  return (
    <DataTableActionsDropDown>
      <AnnouncementsEditAction id={id} />
      <DropdownMenuSeparator />
      <AnnouncementsDeleteAction id={id} />
    </DataTableActionsDropDown>
  );
};
