"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Status } from ".prisma/client";

interface Props {
  doAfterChange?: (value: Status) => void;
  defaultValue?: Status;
}

const SelectStatus = ({ doAfterChange, defaultValue = Status.NONE }: Props) => {
  const handleChange = (value: Status) => {
    doAfterChange && doAfterChange(value);
  };

  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={(value: Status) => handleChange(value)}
    >
      <SelectTrigger className="uppercase min-w-[200px]">
        <SelectValue placeholder="Status" defaultValue={Status.NONE} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="uppercase">
          <SelectItem value={Status.NONE}>BRAK</SelectItem>
          <SelectItem value={Status.UPCOMING}>Oczekujące</SelectItem>
          <SelectItem value={Status.ACTIVE}>Aktywne</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectStatus;
