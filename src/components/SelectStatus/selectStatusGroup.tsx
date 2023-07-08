import React from "react";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import { Status } from "@prisma/client";

const SelectStatusGroup = () => (
  <SelectGroup className="uppercase">
    <SelectItem value={Status.NONE}>BRAK</SelectItem>
    <SelectItem value={Status.UPCOMING}>Oczekujące</SelectItem>
    <SelectItem value={Status.ACTIVE}>Aktywne</SelectItem>
  </SelectGroup>
);
export default SelectStatusGroup;
