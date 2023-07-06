import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";

interface Props {
  columnsLength: number;
}

const EmptyTableRow = ({ columnsLength }: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={columnsLength} className="h-24 text-center">
        No results.
      </TableCell>
    </TableRow>
  );
};

export default EmptyTableRow;
