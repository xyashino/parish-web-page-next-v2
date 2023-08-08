"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { Album } from "@prisma/client";
import { albumColumns } from "./album-columns";
import { Separator } from "@/components/ui/separator";

interface Props extends PropsWithChildren {
  data: Album[];
}
export const AlbumsDataTable = ({ data }: Props) => {
  return (
    <div>
      <div className="w-11/12 mx-auto space-y-2 mb-2">
        <h3 className="text-foreground text-2xl font-bold">
          Wszystkie Albumy:
        </h3>
        <Separator />
      </div>
      <DataTable columns={albumColumns} data={data} />
    </div>
  );
};
