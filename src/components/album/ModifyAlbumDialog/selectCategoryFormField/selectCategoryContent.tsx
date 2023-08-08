import React from "react";
import { SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { useCategories } from "@/lib/hooks/useCategories";

export const SelectCategoryContent = () => {
  const { isLoading, categories } = useCategories();
  return (
    <SelectContent>
      <SelectGroup className="uppercase">
        <SelectItem value="" defaultChecked>
          {isLoading ? "Pobieranie Kategorii..." : "Brak"}
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
