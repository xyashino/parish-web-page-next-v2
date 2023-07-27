import React from "react";
import DataTableActionsDropDown from "@/components/DataTable/DataTableActionsDropDown";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import IntentionsDeleteAction from "./intentionsDeleteAction";
import IntentionsEditAction from "./intentionsEditAction";
interface Props {
  id: string;
}

const IntentionsDropDownActions = ({ id }: Props) => {
  return (
    <DataTableActionsDropDown>
      <IntentionsEditAction id={id} />
      <DropdownMenuSeparator />
      <IntentionsDeleteAction id={id} />
    </DataTableActionsDropDown>
  );
};

export default IntentionsDropDownActions;
