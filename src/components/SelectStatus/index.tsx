"use client";
import React, { useLayoutEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { SelectStatusItem } from "@/components/SelectStatus/selecStatusItem";
import { Status } from "@/types/db/enums";

interface Props {
  doAfterChange?: (value: Status) => void;
  defaultValue?: Status;
  label?: string;
}

export const SelectStatus = ({
  doAfterChange,
  defaultValue = "NONE",
  label,
}: Props) => {
  const [value, setValue] = useState<any>(defaultValue);
  const handleChange = (value: any) => {
    doAfterChange && doAfterChange(value);
  };
  useLayoutEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  if (label) {
    return (
      <div className="w-[200px]">
        <Label id={label}>{label}</Label>
        <SelectStatusItem
          defaultValue={defaultValue}
          value={value}
          onValueChange={handleChange}
        />
      </div>
    );
  }

  return (
    <SelectStatusItem
      defaultValue={defaultValue}
      value={value}
      onValueChange={handleChange}
    />
  );
};
