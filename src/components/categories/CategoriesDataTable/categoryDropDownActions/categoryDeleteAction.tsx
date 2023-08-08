import React, { SyntheticEvent } from "react";
import DataTableActionsDropDownItem from "@/components/DataTable/DataTableActionsDropDownItem";
import { TrashIcon } from "@radix-ui/react-icons";
import { CategoriesCrud } from "@/lib/services/categories";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

const CategoryDeleteAction = ({ id }: Props) => {
  const { refresh } = useRouter();
  const handleDelete = async (e?: SyntheticEvent) => {
    await CategoriesCrud.delete(id);
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

export default CategoryDeleteAction;
