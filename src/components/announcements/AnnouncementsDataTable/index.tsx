"use client";
import React, { PropsWithChildren } from "react";
import { Announcements } from "@prisma/client";
import DataTable from "@/components/DataTable";
import { announcementsColumns } from "./announcements-columns";
import { Separator } from "@/components/ui/separator";

interface Props extends PropsWithChildren {
  data: Announcements[];
}

const AnnouncementsDataTable = ({ data }: Props) => {
  return (
    <div>
      <div className="w-11/12 mx-auto space-y-2 mb-2">
        <h3 className="text-foreground text-2xl font-bold">
          Wszystkie Ogłoszenia:
        </h3>
        <Separator />
      </div>
      <DataTable columns={announcementsColumns} data={data} />
    </div>
  );
};

export default AnnouncementsDataTable;
