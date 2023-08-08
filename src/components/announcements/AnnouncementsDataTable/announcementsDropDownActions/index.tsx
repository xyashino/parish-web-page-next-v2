import React from "react";
import DataTableActionsDropDown from "@/components/DataTable/DataTableActionsDropDown";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import AnnouncementsDeleteAction from "./announcementsDeleteAction";
import AnnouncementsEditAction from "./announcementsEditAction";

interface Props {
  id: string;
}

const AnnouncementsDropDownActions = ({ id }: Props) => {
  return (
    <DataTableActionsDropDown>
      <AnnouncementsEditAction id={id} />
      <DropdownMenuSeparator />
      <AnnouncementsDeleteAction id={id} />
    </DataTableActionsDropDown>
  );
};

export default AnnouncementsDropDownActions;
