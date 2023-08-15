import { Header, RowData } from "@tanstack/table-core";
import { TableHead } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";

interface Props<TData extends RowData> extends Header<TData, any> {}

export const DataTableHead = <TData extends RowData>({
  id,
  getContext,
  column,
  isPlaceholder,
}: Props<TData>) => (
  <TableHead key={id} className="text-background hover:bg-foreground">
    {isPlaceholder ? null : flexRender(column.columnDef.header, getContext())}
  </TableHead>
);
