import React from "react";
import { SelectTrigger, SelectValue } from "@/components/ui/select";
export const SelectCategoryTrigger = () => {
  return (
    <SelectTrigger className="font-bold uppercase min-w-[200px]">
      <SelectValue placeholder="Brak" />
    </SelectTrigger>
  );
};
