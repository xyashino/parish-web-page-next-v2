import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { TrashIcon } from "@radix-ui/react-icons";
import toast from "react-hot-toast";
import { useCategoriesStore } from "@/lib/store/categories/useCategoriesStore";

interface Props {
  id: string;
}

const CategoryDeleteAction = ({ id }: Props) => {
  const { deleteEntity } = useCategoriesStore();
  const handleDelete = (e?: SyntheticEvent) => {
    e?.preventDefault();
    return deleteEntity(id);
  };

  return (
    <DataTableActionsDropDawnItem
      text="Usuń"
      Icon={TrashIcon}
      onClick={handleDelete}
      className="text-red-500"
    />
  );
};

export default CategoryDeleteAction;
