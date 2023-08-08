"use client";
import React, { useLayoutEffect, useState } from "react";
import { Status } from "@prisma/client";
import { Label } from "@/components/ui/label";
import { SelectStatusItem } from "@/components/SelectStatus/selecStatuesItem";

interface Props {
  doAfterChange?: (value: Status) => void;
  defaultValue?: Status;
  label?: string;
}

export const SelectStatus = ({
  doAfterChange,
  defaultValue = Status.NONE,
  label,
}: Props) => {
  const [value, setValue] = useState<Status>(defaultValue);
  const handleChange = (value: Status) => {
    doAfterChange && doAfterChange(value);
  };
  useLayoutEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  if (label) {
    return (
      <div className="w-[200px]">
        <Label id={label}>{label}</Label>
        <SelectStatusItem value={value} onValueChange={handleChange} />
      </div>
    );
  }

  return <SelectStatusItem value={value} onValueChange={handleChange} />;
};
