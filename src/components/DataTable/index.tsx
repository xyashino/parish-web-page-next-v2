"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EmptyTableRow } from "@/components/DataTable/emptyTableRow";
import { PropsWithChildren, useState } from "react";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> extends PropsWithChildren {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  className,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const tableClasses = cn("rounded-xl border mx-auto lg:w-11/12", className);
  return (
    <div className={tableClasses}>
      <Table>
        <TableHeader className="bg-foreground">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-foreground">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className="text-background hover:bg-foreground"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <EmptyTableRow columnsLength={columns.length} />
          )}
        </TableBody>
      </Table>
    </div>
  );
};
