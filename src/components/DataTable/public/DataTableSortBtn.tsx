import React from "react";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

interface Props {
  value: string;
  onClick: () => void;
}

export const DataTableSortBtn = ({ value, onClick }: Props) => {
  return (
    <Button onClick={onClick}>
      {value}
      <CaretSortIcon className="ml-2 h-4 w-4" />
    </Button>
  );
};
