"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Album, Category } from "@prisma/client";
import DataTableSortBtn from "@/components/DataTable/DataTableSortBtn";
import AlbumDropDownActions from "@/components/data-tables/AlbumsDataTable/albumDropDownActions";

const albumColumns: ColumnDef<Album & { category: Category | null }>[] = [
  {
    accessorKey: "title",
    header: "Tytuł",
  },
  {
    id: "description",
    accessorKey: "description",
    header: "Opis",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <span>{value || "Brak"}</span>;
    },
  },
  {
    accessorKey: "category.name",
    header: "Kat.",
    cell: ({ getValue }) => {
      const value = getValue() as string | null;
      return <span className="font-bold italic">{value || "Brak"}</span>;
    },
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <AlbumDropDownActions albumData={row.original} />,
  },
];
export default albumColumns;
