"use client";
import { DataTable } from "@/components/DataTable";
import { Admin } from ".prisma/client";
import { administratorsColumns } from "./administrators-columns";

interface Props {
  data: Admin[];
}

export const AdministratorsTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Lista wszystkich e-maili administratorów:"
    tableDescription="Umozliwia to logowanie do panelu administracyjnego poprzez zapisany email."
    data={data}
    columns={administratorsColumns}
  />
);
