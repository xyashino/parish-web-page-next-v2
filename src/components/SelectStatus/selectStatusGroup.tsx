import React from "react";
import { SelectGroup, SelectItem } from "@/components/ui/select";

export const SelectStatusGroup = () => (
  <SelectGroup className="uppercase">
    <SelectItem value="NONE">BRAK</SelectItem>
    <SelectItem value="UPCOMING">Oczekujące</SelectItem>
    <SelectItem value="ACTIVE">Aktywne</SelectItem>
  </SelectGroup>
);
