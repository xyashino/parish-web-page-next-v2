import React, { useLayoutEffect } from "react";
import { SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { useCategoriesStore } from "@/lib/store";
import { apiCall } from "@/lib/utils";
import { Category } from "@prisma/client";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

const SelectCategoryContent = () => {
  const { entities } = useCategoriesStore();

  return (
    <SelectContent>
      <SelectGroup className="font-bold uppercase">
        <SelectItem value="" defaultChecked>
          Brak
        </SelectItem>
        {entities.map(({ id, name }) => (
          <SelectItem value={id} key={id}>
            {name}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  );
};
export default SelectCategoryContent;
