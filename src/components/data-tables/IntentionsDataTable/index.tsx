"use client";
import React, { PropsWithChildren } from "react";
import DataTable from "@/components/DataTable";
import { WeekIntentions } from "@prisma/client";
import intentionsColumns from "@/components/data-tables/IntentionsDataTable/intentions-columns";

interface Props extends PropsWithChildren {
  data: WeekIntentions[];
}

const IntentionsDataTable = ({ data }: Props) => {
  return <DataTable columns={intentionsColumns} data={data} />;
};

export default IntentionsDataTable;
