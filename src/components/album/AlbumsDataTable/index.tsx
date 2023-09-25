"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { albumColumns } from "./album-columns";
import { AlbumResponse } from "@/types/db/album";

interface Props extends PropsWithChildren {
  data: AlbumResponse[];
}
export const AlbumsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Albumy:"
    columns={albumColumns}
    data={data}
  />
);
