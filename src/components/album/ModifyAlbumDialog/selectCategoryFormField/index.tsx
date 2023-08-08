import React from "react";
import { Select } from "@/components/ui/select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SelectCategoryContent } from "./selectCategoryContent";
import { SelectCategoryTrigger } from "./selectCategoryTrigger";
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
          <FormDescription>
            Wybierz kategorię do której ma należeć album. Jeśli nie wybierzesz
            żadnej, album nie będzie widoczny na stronie.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default SelectCategoryFormField;
