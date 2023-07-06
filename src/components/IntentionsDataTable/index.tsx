"use client";
import React from "react";
import DataTable from "@/components/DataTable";
import { WeekIntentions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import DataTableActions from "@/components/DataTable/DataTableActions";
import IntentionsDataTableDateCell from "@/components/IntentionsDataTable/intentionsDataTableDateCell";
import { CaretSortIcon } from "@radix-ui/react-icons";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";

interface Props {
  data: WeekIntentions[];
}

const columns: ColumnDef<WeekIntentions>[] = [
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
    cell: ({ row }) => {
      return <DataTableActions id={row.original.id} />;
    },
  },
];
const IntentionsDataTable = ({ data }: Props) => {
  return <DataTable columns={columns} data={data} />;
};

export default IntentionsDataTable;
