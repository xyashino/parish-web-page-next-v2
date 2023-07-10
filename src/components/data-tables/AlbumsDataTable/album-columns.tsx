"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Album } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import AlbumDropDownActions from "@/components/data-tables/AlbumsDataTable/albumDropDownActions";

const albumColumns: ColumnDef<Album>[] = [
  {
    accessorKey: "id",
    header: () => <span className="font-bold w-10">ID</span>,
  },
  {
    accessorKey: "show",
    header: ({ column }) => {
      return (
        <DataTableSortBtn
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          value="Aktywne"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nazwa",
  },
  {
    id: "description",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <span>{value || "Brak"}</span>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <AlbumDropDownActions albumData={row.original} />,
  },
];
export default albumColumns;
