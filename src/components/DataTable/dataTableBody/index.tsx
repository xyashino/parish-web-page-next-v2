import { TableBody } from "@/components/ui/table";
import { Table } from "@tanstack/react-table";
import { RowData } from "@tanstack/table-core";
import { EmptyTableRow } from "./emptyTableRow";
import { DataTableRow } from "./dataTableRow";

interface Props<TData extends RowData> {
  table: Table<TData>;
  columnsLength: number;
}

export const DataTableBody = <TData extends RowData>({
  table,
  columnsLength,
}: Props<TData>) => (
  <TableBody>
    {table.getRowModel().rows?.length ? (
      table
        .getRowModel()
        .rows.map((row) => <DataTableRow key={row.id} {...row} />)
    ) : (
      <EmptyTableRow columnsLength={columnsLength} />
    )}
  </TableBody>
);
