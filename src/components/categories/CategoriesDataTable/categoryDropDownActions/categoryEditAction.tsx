import React, { SyntheticEvent } from "react";
import { Category } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { useCategoryDialogStore } from "@/lib/store";

interface Props {
  categoryData: Category;
}

export const CategoryEditAction = ({
  categoryData: { name, id, order, show },
}: Props) => {
  const { open } = useCategoryDialogStore();
  const handleEditModal = (e?: SyntheticEvent) => {
    e?.preventDefault();
    open(
      {
        name,
        order: order ?? 0,
        show,
      },
      id
    );
  };
  return (
    <DataTableActionsDropDownItem
      text="Edytuj"
      Icon={Pencil2Icon}
      onClick={handleEditModal}
    />
  );
};
