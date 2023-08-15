import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSortBtn } from "@/components/DataTable/public/DataTableSortBtn";
import { Admin } from "@prisma/client";
import DeleteAdministratorAction from "./deleteAdministratorAction";

export const administratorsColumns: ColumnDef<Admin>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Email"
      />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <DeleteAdministratorAction id={row.original.id} />,
  },
];
