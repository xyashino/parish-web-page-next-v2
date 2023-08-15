import React from "react";
import { FormField } from "@/components/ui/form";
import { CustomFormControlItem } from "@/components/form";
import { Input } from "@/components/ui/input";
import { SelectCategoryFormField } from "./selectCategoryFormField";
import { SwitchWithLabel } from "@/components/SwitchWithLabel";

export const ModifyAlbumDialogFormFields = () => {
  return (
    <>
      <FormField
        name="title"
        render={({ field }) => (
          <CustomFormControlItem label="Tytuł:" description="Pole wymagane">
            <Input {...field} type="text" />
          </CustomFormControlItem>
        )}
      />
      <FormField
        name="subtitle"
        render={({ field }) => (
          <CustomFormControlItem
            label="Podtytuł:"
            description="Pole nie jest wymagane"
          >
            <Input {...field} type="text" />
          </CustomFormControlItem>
        )}
      />
      <SelectCategoryFormField />

      <FormField
        name="show"
        render={({ field }) => (
          <CustomFormControlItem>
            <SwitchWithLabel
              {...field}
              labelText="Wyświetlaj na album na stronie."
              id="album"
            />
          </CustomFormControlItem>
        )}
      />
    </>
  );
};
