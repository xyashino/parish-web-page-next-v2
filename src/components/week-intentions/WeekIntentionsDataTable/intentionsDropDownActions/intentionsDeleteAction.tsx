import React from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { IntentionsCrud } from "@/lib/services/intentions";

interface Props {
  id: string;
}

export const IntentionsDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async () => {
    await IntentionsCrud.delete(id);
    refresh();
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
