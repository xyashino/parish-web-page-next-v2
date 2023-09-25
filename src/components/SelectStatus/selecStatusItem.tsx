import React from "react";
import { SelectStatusTrigger } from "@/components/SelectStatus/selectStatusTrigger";
import { Select, SelectContent } from "@/components/ui/select";
import { SelectStatusGroup } from "@/components/SelectStatus/selectStatusGroup";
import { SelectProps } from "@radix-ui/react-select";
import { Status } from "@/types/db/enums";

interface Props extends SelectProps {
  value: Status;
}

export const SelectStatusItem = ({ value, ...props }: Props) => {
  return (
    <Select {...props} value={value}>
      <SelectStatusTrigger value={value} />
      <SelectContent>
        <SelectStatusGroup />
      </SelectContent>
    </Select>
  );
};
