"use client";
import React, { PropsWithChildren } from "react";
import DataTable from "@/components/DataTable";
import { WeekIntentions } from "@prisma/client";
import { intentionsColumns } from "@/components/week-intentions/WeekIntentionsDataTable/intentions-columns";
import { Separator } from "@/components/ui/separator";

interface Props extends PropsWithChildren {
  data: WeekIntentions[];
}

export const WeekIntentionsDataTable = ({ data }: Props) => {
  return (
    <div>
      <div className="w-11/12 mx-auto space-y-2 mb-2">
        <h3 className="text-foreground text-2xl font-bold">
          Wszystkie Intencje Parafialne:
        </h3>
        <Separator />
      </div>
      <DataTable columns={intentionsColumns} data={data} />
    </div>
  );
};
