import React from "react";
import DataTableActionsDropDawn from "@/components/DataTable/DataTableActionsDropDawn";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import AnnouncementsDeleteAction from "./announcementsDeleteAction";
import AnnouncementsEditAction from "./announcementsEditAction";

interface Props {
  id: string;
}

const AnnouncementsDropDownActions = ({ id }: Props) => {
  return (
    <DataTableActionsDropDawn>
      <AnnouncementsEditAction id={id} />
      <DropdownMenuSeparator />
      <AnnouncementsDeleteAction id={id} />
    </DataTableActionsDropDawn>
  );
};

export default AnnouncementsDropDownActions;
