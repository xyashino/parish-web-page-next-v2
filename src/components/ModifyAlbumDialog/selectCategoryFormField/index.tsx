import React from "react";
import { Select } from "@/components/ui/select";
import { Category } from "@prisma/client";
import SelectCategoryContent from "./selectCategoryContent";
import SelectCategoryTrigger from "./selectCategoryTrigger";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const SelectCategoryFormField = () => {
  return (
    <FormField
      name="categoryId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Kategoria:</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectCategoryTrigger />
            </FormControl>
            <SelectCategoryContent />
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default SelectCategoryFormField;
