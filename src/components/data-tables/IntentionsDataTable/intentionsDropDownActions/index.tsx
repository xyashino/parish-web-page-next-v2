import React from "react";
import DataTableActionsDropDawn from "@/components/DataTable/DataTableActionsDropDawn";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import IntentionsDeleteAction from "./intentionsDeleteAction";
import IntentionsEditAction from "./intentionsEditAction";
interface Props {
  id: string;
}

const IntentionsDropDownActions = ({ id }: Props) => {
  return (
    <DataTableActionsDropDawn>
      <IntentionsEditAction id={id} />
      <DropdownMenuSeparator />
      <IntentionsDeleteAction id={id} />
    </DataTableActionsDropDawn>
  );
};

export default IntentionsDropDownActions;
