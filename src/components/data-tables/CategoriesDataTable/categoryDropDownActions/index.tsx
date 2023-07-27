import React from "react";
import DataTableActionsDropDown from "@/components/DataTable/DataTableActionsDropDown";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import CategoryDeleteAction from "./categoryDeleteAction";
import CategoryEditAction from "./categoryEditAction";
import { Category } from "@prisma/client";

interface Props {
  categoryData: Category;
}

const CategoryDropDownActions = ({ categoryData }: Props) => {
  return (
    <DataTableActionsDropDown>
      <CategoryEditAction categoryData={categoryData} />
      <DropdownMenuSeparator />
      <CategoryDeleteAction id={categoryData.id} />
    </DataTableActionsDropDown>
  );
};

export default CategoryDropDownActions;
