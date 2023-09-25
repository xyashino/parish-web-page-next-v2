"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { announcementsColumns } from "./announcements-columns";
import { AnnouncementsResponse } from "@/types/db/announcement";

interface Props extends PropsWithChildren {
  data: AnnouncementsResponse;
}

export const AnnouncementsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Ogłoszenia:"
    columns={announcementsColumns}
    data={data}
  />
);
