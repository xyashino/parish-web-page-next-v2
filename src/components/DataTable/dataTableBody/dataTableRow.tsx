import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { flexRender, Row } from "@tanstack/react-table";
import { RowData } from "@tanstack/table-core";

interface Props<TData extends RowData> extends Row<TData> {}

export const DataTableRow = <TData extends RowData>({
  id,
  getVisibleCells,
  getIsSelected,
}: Props<TData>) => {
  return (
    <TableRow key={id} data-state={getIsSelected() && "selected"}>
      {getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};
