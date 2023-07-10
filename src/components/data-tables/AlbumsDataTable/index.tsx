"use client";
import React, { PropsWithChildren, useLayoutEffect } from "react";
import DataTable from "@/components/DataTable";
import { Album } from "@prisma/client";
import albumColumns from "./album-columns";
import { useAlbumsStore } from "@/lib/store/albums/useAlbumsStore";

interface Props extends PropsWithChildren {
  data: Album[];
}
const AlbumsDataTable = ({ data }: Props) => {
  const { updateAllEntities, entities } = useAlbumsStore();
  useLayoutEffect(() => {
    updateAllEntities(data);
  }, []);
  return <DataTable columns={albumColumns} data={entities} />;
};
export default AlbumsDataTable;
