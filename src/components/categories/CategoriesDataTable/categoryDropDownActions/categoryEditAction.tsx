import React, { SyntheticEvent } from "react";
import { DataTableActionsDropDownItem } from "@/components/DataTable/DataTableActionsDropDownItem";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Category } from "@prisma/client";
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
