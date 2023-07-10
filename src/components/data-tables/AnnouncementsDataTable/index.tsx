"use client";
import React, { PropsWithChildren } from "react";
import DataTable from "@/components/DataTable";
import { Announcements } from "@prisma/client";
import announcementsColumns from "@/components/data-tables/AnnouncementsDataTable/announcements-columns";

interface Props extends PropsWithChildren {
  data: Announcements[];
}

const AnnouncementsDataTable = ({ data }: Props) => {
  return <DataTable columns={announcementsColumns} data={data} />;
};

export default AnnouncementsDataTable;
