import React, { SyntheticEvent } from "react";
import DataTableActionsDropDawnItem from "@/components/DataTable/DataTableActionsDropDawnItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Category } from "@prisma/client";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";
import { useCategoryDialogStore } from "@/lib/store/categories/useCategoryDialogStore";

interface Props {
  categoryData: Category;
}

const CategoryEditAction = ({
  categoryData: { name, id, order, show },
}: Props) => {
  const { open } = useCustomDialogStore();
  const { updateDefaultValues } = useCategoryDialogStore();
  const handleEditModal = (e?: SyntheticEvent) => {
    e?.preventDefault();
    updateDefaultValues(
      {
        name,
        order: order ?? 0,
        show,
      },
      id
    );
    open();
  };
  return (
    <DataTableActionsDropDawnItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleEditModal}
    />
  );
};

export default CategoryEditAction;
