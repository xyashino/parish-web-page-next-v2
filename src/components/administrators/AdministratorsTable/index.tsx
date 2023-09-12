"use client";
import { DataTable } from "@/components/DataTable";
import { administratorsColumns } from "./administrators-columns";
import { AdministratorsResponse } from "@/types/db/administrator";

interface Props {
  data: AdministratorsResponse;
}

export const AdministratorsTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Lista wszystkich e-maili administratorów:"
    tableDescription="Umozliwia to logowanie do panelu administracyjnego poprzez zapisany email."
    data={data}
    columns={administratorsColumns}
  />
);
