"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Album } from "@prisma/client";
import { AlbumDropDownActions } from "./albumDropDownActions";
import { DataTableBooleanCell, DataTableSortBtn } from "@/components/DataTable";

export const albumColumns: ColumnDef<Album>[] = [
  {
    accessorKey: "title",
    header: "Tytuł",
  },
  {
    id: "subtitle",
    accessorKey: "subtitle",
    header: "Podtytuł",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <span>{value || "Brak"}</span>;
    },
  },
  {
    accessorKey: "show",
    header: ({ column }) => (
      <DataTableSortBtn
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        value="Aktywne"
      />
    ),
    cell: ({ getValue }) => (
      <DataTableBooleanCell value={getValue() as boolean} />
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <AlbumDropDownActions albumData={row.original} />,
  },
];
