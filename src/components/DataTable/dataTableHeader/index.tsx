import { TableHeader, TableRow } from "@/components/ui/table";
import { Table } from "@tanstack/react-table";
import { RowData } from "@tanstack/table-core";
import { DataTableHead } from "./dataTableHead";

interface Props<TData extends RowData> {
  table: Table<TData>;
}

export const DataTableHeader = <TData extends RowData>({
  table,
}: Props<TData>) => {
  return (
    <TableHeader className="bg-foreground">
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="hover:bg-foreground">
          {headerGroup.headers.map((header) => (
            <DataTableHead key={header.id} {...header} />
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
