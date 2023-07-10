import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import CategoryDropDownActions from "@/components/data-tables/CategoriesDataTable/categoryDropDownActions";

const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: () => <span className="font-bold w-10">ID</span>,
  },
  {
    accessorKey: "order",
    header: ({ column }) => {
      return (
        <DataTableSortBtn
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          value="Order"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nazwa",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CategoryDropDownActions categoryData={row.original} />,
  },
];
export default categoryColumns;
