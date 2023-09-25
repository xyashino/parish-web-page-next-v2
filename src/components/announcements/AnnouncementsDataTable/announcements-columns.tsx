import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableSortBtn, DataTableStatusCell } from "@/components/DataTable";
import { AnnouncementsDropDownActions } from "./announcementsDropDownActions";
import { AnnouncementResponse } from "@/types/db/announcement";

export const announcementsColumns: ColumnDef<
  ExcludeNull<AnnouncementResponse>
>[] = [
  {
    accessorKey: "subtitle",
    header: "Podtytuł",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      if (!value)
        return <span className="font-bold uppercase italic">Brak</span>;
      return <span>{value}</span>;
    },
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
    cell: ({ getValue }) => <DataTableStatusCell status={getValue()} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <AnnouncementsDropDownActions id={row.original.id} />,
  },
];
