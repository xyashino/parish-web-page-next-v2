"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { AlbumDropDownActions } from "./albumDropDownActions";
import { DataTableBooleanCell, DataTableSortBtn } from "@/components/DataTable";
import { AlbumResponse } from "@/types/db/album";

export const albumColumns: ColumnDef<AlbumResponse>[] = [
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
    accessorKey: "category",
    header: "Kategoria",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return (
        <span className="uppercase font-bold bg-foreground p-2 text-background rounded shadow">
          {value || "Brak"}
        </span>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <AlbumDropDownActions albumData={row.original} />,
  },
];
