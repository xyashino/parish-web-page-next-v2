import React, { SyntheticEvent } from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { TrashIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

const IntentionsDeleteAction = ({ id }: Props) => {
  const handleDelete = (e?: SyntheticEvent) => {
    e?.preventDefault();
  };

  return (
    <DataTableActionsDropDownItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};

export default IntentionsDeleteAction;
