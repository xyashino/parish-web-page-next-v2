import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Announcements } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import AnnouncementsDropDownActions from "@/components/data-tables/AnnouncementsDataTable/announcementsDropDownActions";

export const announcementsColumns: ColumnDef<Announcements>[] = [
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
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;
      return <AnnouncementsDropDownActions id={id} />;
    },
  },
];
