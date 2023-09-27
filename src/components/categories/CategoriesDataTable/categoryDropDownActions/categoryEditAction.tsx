import React, { SyntheticEvent } from "react";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { DataTableActionsDropDownItem } from "@/components/DataTable";
import { CategoryResponse } from "@/types/db/album";
import { useCategoryDialogStore } from "@/lib/store/useCategoryDialogStore";

interface Props {
  categoryData: ExcludeNull<CategoryResponse>;
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
      id,
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
