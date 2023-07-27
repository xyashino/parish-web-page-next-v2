import React from "react";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
import { Status } from "@prisma/client";

interface Props {
  value: Status;
}

const SelectStatusTrigger = ({ value }: Props) => {
  return (
    <SelectTrigger className="uppercase min-w-[200px]" value={value}>
      <SelectValue placeholder="BRAK" />
    </SelectTrigger>
  );
};
export default SelectStatusTrigger;
