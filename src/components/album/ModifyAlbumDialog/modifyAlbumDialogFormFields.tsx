import React from "react";
import { FormField } from "@/components/ui/form";
import { CustomFormControlItem, CustomFormInputItem } from "@/components/form";
import { SwitchWithLabel } from "@/components/SwitchWithLabel";

export const ModifyAlbumDialogFormFields = () => {
  return (
    <>
      <CustomFormInputItem
        fieldName="title"
        label="Tytuł:"
        description="Pole wymagane"
        type="text"
      />
      <CustomFormInputItem
        fieldName="subtitle"
        label="Podtytuł:"
        description="Pole nie jest wymagane"
        type="text"
      />
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
