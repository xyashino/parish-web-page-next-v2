import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Announcements } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import AnnouncementsDropDownActions from "@/components/data-tables/AnnouncementsDataTable/announcementsDropDownActions";

const announcementsColumns: ColumnDef<Announcements>[] = [
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.original.id;
      return <AnnouncementsDropDownActions id={id} />;
    },
  },
];
export default announcementsColumns;
