import React from "react";
import { Category } from "@prisma/client";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DataTableActionsDropDown } from "@/components/DataTable";
import { CategoryDeleteAction } from "./categoryDeleteAction";
import { CategoryEditAction } from "./categoryEditAction";

interface Props {
  categoryData: Category;
}

export const CategoryDropDownActions = ({ categoryData }: Props) => {
  return (
    <DataTableActionsDropDown>
      <CategoryEditAction categoryData={categoryData} />
      <DropdownMenuSeparator />
      <CategoryDeleteAction id={categoryData.id} />
    </DataTableActionsDropDown>
  );
};
