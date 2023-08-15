import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

interface Props {
  columnsLength: number;
}

export const EmptyTableRow = ({ columnsLength }: Props) => {
  return (
    <TableRow>
      <TableCell
        colSpan={columnsLength}
        className="h-24 text-center text-xl italic"
      >
        Brak Wyników.
      </TableCell>
    </TableRow>
  );
};
