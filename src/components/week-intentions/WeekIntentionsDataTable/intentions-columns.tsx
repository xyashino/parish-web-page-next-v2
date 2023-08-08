import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Status, WeekIntentions } from "@prisma/client";
import { DataTableSortBtn } from "@/components/DataTable/DataTableSortBtn";
import { IntentionsDataTableDateCell } from "./intentionsDataTableDateCell";
import { IntentionsDropDownActions } from "./intentionsDropDownActions";
import { DataTableStatusCell } from "@/components/DataTable/DataTableStatusCell";

export const intentionsColumns: ColumnDef<WeekIntentions>[] = [
  {
    accessorKey: "id",
    header: () => <span className="font-bold w-10">ID</span>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Status"
      />
    ),
    cell: ({ getValue }) => (
      <DataTableStatusCell status={getValue() as Status} />
    ),
  },
  {
    accessorKey: "startWeek",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Tydz. Start"
      />
    ),

    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <IntentionsDataTableDateCell value={value} />;
    },
  },
  {
    accessorKey: "endWeek",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Tydz. Koniec"
      />
    ),
    cell: ({ getValue }) => (
      <IntentionsDataTableDateCell value={getValue() as string | null} />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <IntentionsDropDownActions id={row.original.id} />,
  },
];
