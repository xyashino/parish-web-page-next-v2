import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { IntentionsDataTableDateCell } from "./intentionsDataTableDateCell";
import { IntentionsDropDownActions } from "./intentionsDropDownActions";
import { DataTableSortBtn, DataTableStatusCell } from "@/components/DataTable";
import { SelectWeekIntentions } from "@/types/db/week-intentions";

export const intentionsColumns: ColumnDef<SelectWeekIntentions>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Status"
      />
    ),
    cell: ({ getValue }) => <DataTableStatusCell status={getValue()} />,
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
