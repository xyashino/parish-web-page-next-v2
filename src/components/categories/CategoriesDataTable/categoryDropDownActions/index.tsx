import React from "react";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { DataTableActionsDropDown } from "@/components/DataTable";
import { CategoryDeleteAction } from "./categoryDeleteAction";
import { CategoryEditAction } from "./categoryEditAction";
import { NotNullCategoryResponse } from "@/types/db/category";

interface Props {
  categoryData: NotNullCategoryResponse;
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
