"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { intentionsColumns } from "./intentions-columns";
import { WeekIntentionsWithRelations } from "@/types/db/week-intentions";

interface Props extends PropsWithChildren {
  data: WeekIntentionsWithRelations[];
}

export const WeekIntentionsDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Intencje Parafialne:"
    columns={intentionsColumns}
    data={data}
  />
);
