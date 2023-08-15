import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@prisma/client";
import { DataTableBooleanCell, DataTableSortBtn } from "@/components/DataTable";
import { CategoryDropDownActions } from "./categoryDropDownActions";

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "order",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Order"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Nazwa",
  },
  {
    accessorKey: "show",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Aktywne"
      />
    ),
    cell: ({ getValue }) => (
      <DataTableBooleanCell value={getValue() as boolean} />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <CategoryDropDownActions categoryData={row.original} />,
  },
];
