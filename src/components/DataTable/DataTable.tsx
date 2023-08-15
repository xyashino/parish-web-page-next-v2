"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useTable } from "@/lib/hooks/useTable";
import { DataTableBody } from "./dataTableBody";
import { DataTableHeader } from "./dataTableHeader";
import { DataTableTitle } from "./dataTableTitle";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  wrapperClassName?: string;
  tableTitle?: string;
}

export const DataTable = <TData, TValue>({
  className,
  tableTitle,
  wrapperClassName,
  ...tableProps
}: DataTableProps<TData, TValue>) => {
  const table = useTable(tableProps);
  const tableClasses = cn("rounded-xl border mx-auto", className);
  const wrapperClasses = cn("w-11/12 mx-auto space-y-2 mb-2", wrapperClassName);

  return (
    <div className={wrapperClasses}>
      {tableTitle && <DataTableTitle title={tableTitle} />}
      <div className={tableClasses}>
        <Table>
          <DataTableHeader table={table} />
          <DataTableBody
            table={table}
            columnsLength={tableProps.columns.length}
          />
        </Table>
      </div>
    </div>
  );
};
