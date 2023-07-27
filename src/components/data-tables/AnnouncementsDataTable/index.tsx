"use client";
import React, { PropsWithChildren } from "react";
import { Announcements } from "@prisma/client";
import DataTable from "@/components/DataTable";
import { announcementsColumns } from "./announcements-columns";

interface Props extends PropsWithChildren {
  data: Announcements[];
}

const AnnouncementsDataTable = ({ data }: Props) => {
  return <DataTable columns={announcementsColumns} data={data} />;
};

export default AnnouncementsDataTable;
