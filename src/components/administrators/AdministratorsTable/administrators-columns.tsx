import React from "react";
import { Admin } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSortBtn } from "@/components/DataTable";
import { DeleteAdministratorAction } from "./deleteAdministratorAction";

export const administratorsColumns: ColumnDef<Admin>[] = [
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
