"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { WeekIntentions } from "@prisma/client";
import { intentionsColumns } from "./intentions-columns";

interface Props extends PropsWithChildren {
  data: WeekIntentions[];
}

export const WeekIntentionsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Intencje Parafialne:"
    columns={intentionsColumns}
    data={data}
  />
);
