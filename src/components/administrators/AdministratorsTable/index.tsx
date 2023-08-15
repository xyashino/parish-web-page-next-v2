"use client";
import { DataTable } from "@/components/DataTable";
import { Admin } from ".prisma/client";
import { administratorsColumns } from "./administrators-columns";

interface Props {
  data: Admin[];
}

export const AdministratorsTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Lista wszystkich administratorów:"
    data={data}
    columns={administratorsColumns}
  />
);
