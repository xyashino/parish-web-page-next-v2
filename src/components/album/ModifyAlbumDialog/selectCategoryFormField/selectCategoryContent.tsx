import React from "react";
import { SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { CategoriesResponse } from "@/types/db/album";

export interface SelectCategoryProps {
  categories: CategoriesResponse;
}

export const SelectCategoryContent = ({ categories }: SelectCategoryProps) => {
  return (
    <SelectContent>
      <SelectGroup className="uppercase">
        <SelectItem value="" defaultChecked>
          Brak
        </SelectItem>
        {categories.map(({ id, name }) => (
          <SelectItem value={id} key={id}>
            {name}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  );
};
