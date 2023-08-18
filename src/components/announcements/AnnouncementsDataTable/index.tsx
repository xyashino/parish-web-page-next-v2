"use client";
import React, { PropsWithChildren } from "react";
import { Announcements } from "@prisma/client";
import { DataTable } from "@/components/DataTable";
import { announcementsColumns } from "./announcements-columns";

interface Props extends PropsWithChildren {
  data: Announcements[];
}

export const AnnouncementsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Ogłoszenia:"
    columns={announcementsColumns}
    data={data}
  />
);
