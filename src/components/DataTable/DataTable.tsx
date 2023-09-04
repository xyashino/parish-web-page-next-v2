"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTable } from "@/lib/hooks/useTable";
import { DataTableBody } from "./dataTableBody";
import { DataTableHeader } from "./dataTableHeader";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  wrapperClassName?: string;
  tableTitle?: string;
  tableDescription?: string;
}

export const DataTable = <TData, TValue>({
  className,
  tableTitle,
  wrapperClassName,
  tableDescription,
  ...tableProps
}: DataTableProps<TData, TValue>) => {
  const table = useTable(tableProps);
  const tableClasses = cn("rounded-xl border mx-auto", className);
  const wrapperClasses = cn(
    "mx-2 lg:w-11/12 lg:mx-auto mb-2 ",
    wrapperClassName,
  );

  return (
    <Card className={wrapperClasses}>
      {tableTitle && (
        <CardHeaderWithSeparator
          title={tableTitle}
          description={tableDescription}
          separatorClasses="w-11/12"
        />
      )}
      <CardContent className="px-1 lg:px-4">
        <Table className={tableClasses}>
          <DataTableHeader table={table} />
          <DataTableBody
            table={table}
            columnsLength={tableProps.columns.length}
          />
        </Table>
      </CardContent>
    </Card>
  );
};
