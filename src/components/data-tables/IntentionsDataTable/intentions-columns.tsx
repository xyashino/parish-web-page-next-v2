import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { WeekIntentions } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import IntentionsDataTableDateCell from "@/components/data-tables/IntentionsDataTable/intentionsDataTableDateCell";
import IntentionsDropDownActions from "@/components/data-tables/IntentionsDataTable/intentionsDropDownActions";

const intentionsColumns: ColumnDef<WeekIntentions>[] = [
  {
    accessorKey: "id",
    header: () => <span className="font-bold w-10">ID</span>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <DataTableSortBtn
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          value="Status"
        />
      );
    },
  },
  {
    accessorKey: "startWeek",
    header: ({ column }) => {
      return (
        <DataTableSortBtn
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          value="Początek tygodnia"
        />
      );
    },
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <IntentionsDataTableDateCell value={value} />;
    },
  },
  {
    accessorKey: "endWeek",
    header: ({ column }) => {
      return (
        <DataTableSortBtn
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          value="Koniec tygodnia"
        />
      );
    },
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <IntentionsDataTableDateCell value={value} />;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <IntentionsDropDownActions id={row.original.id} />,
  },
];
export default intentionsColumns;
