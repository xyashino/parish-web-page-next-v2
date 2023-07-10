import React from "react";
import DataTableActionsDropDawn from "@/components/DataTable/DataTableActionsDropDawn";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import CategoryDeleteAction from "./categoryDeleteAction";
import CategoryEditAction from "./categoryEditAction";
import { Category } from "@prisma/client";

interface Props {
  categoryData: Category;
}

const CategoryDropDownActions = ({ categoryData }: Props) => {
  return (
    <DataTableActionsDropDawn>
      <CategoryEditAction categoryData={categoryData} />
      <DropdownMenuSeparator />
      <CategoryDeleteAction id={categoryData.id} />
    </DataTableActionsDropDawn>
  );
};

export default CategoryDropDownActions;
