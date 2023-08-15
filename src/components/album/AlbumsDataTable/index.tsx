"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { Album } from "@prisma/client";
import { albumColumns } from "./album-columns";

interface Props extends PropsWithChildren {
  data: Album[];
}
export const AlbumsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Albumy:"
    columns={albumColumns}
    data={data}
  />
);
