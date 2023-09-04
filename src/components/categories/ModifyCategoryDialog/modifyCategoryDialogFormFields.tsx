import React from "react";
import { FormField } from "@/components/ui/form";
import { CustomFormControlItem, CustomFormInputItem } from "@/components/form";
import { SwitchWithLabel } from "@/components/SwitchWithLabel";

export const ModifyCategoryDialogFormFields = () => (
  <>
    <CustomFormInputItem
      fieldName="name"
      label="Nazwa:"
      description="Podaj nazwę kategorii , np. '2020', '2023', 'Parfia'"
      type="text"
    />

    <CustomFormInputItem
      fieldName="order"
      label="Z-index"
      description="Podaj wartość od -20 do 20, im niższa wartość, tym wyżej będzie wyświetlana."
      onChange={(e, field) => field.onChange(e.target.valueAsNumber)}
      type="number"
      min={-20}
      max={20}
      step={1}
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
