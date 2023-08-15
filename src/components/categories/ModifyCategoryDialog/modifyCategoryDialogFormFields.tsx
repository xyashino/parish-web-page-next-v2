import React from "react";
import { FormField } from "@/components/ui/form";
import { CustomFormControlItem } from "@/components/form";
import { Input } from "@/components/ui/input";
import { SwitchWithLabel } from "@/components/SwitchWithLabel";

export const ModifyCategoryDialogFormFields = () => (
  <>
    <FormField
      name="name"
      render={({ field }) => (
        <CustomFormControlItem
          label="Nazwa"
          description="Podaj nazwę kategorii , np. '2020', '2023', 'Parfia'"
        >
          <Input {...field} type="text" />
        </CustomFormControlItem>
      )}
    />
    <FormField
      name="order"
      render={({ field }) => (
        <CustomFormControlItem
          label="Z-index"
          description="Podaj wartość od -20 do 20, im niższa wartość, tym wyżej będzie wyświetlana."
        >
          <Input
            {...field}
            onChange={(e) => field.onChange(e.target.valueAsNumber)}
            type="number"
            min={-20}
            max={20}
            step={1}
          />
        </CustomFormControlItem>
      )}
    />
    <FormField
      name="show"
      render={({ field }) => (
        <CustomFormControlItem>
          <SwitchWithLabel
            {...field}
            labelText="Wyświetlaj na Kategorie na stronie."
            id="album"
          />
        </CustomFormControlItem>
      )}
    />
  </>
);
