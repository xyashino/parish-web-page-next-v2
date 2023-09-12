import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSortBtn } from "@/components/DataTable";
import { DeleteAdministratorAction } from "./deleteAdministratorAction";
import { AdministratorResponse } from "@/types/db/administrator";

export const administratorsColumns: ColumnDef<
  Exclude<AdministratorResponse, null>
>[] = [
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
