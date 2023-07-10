import React from "react";
import { FormField } from "@/components/ui/form";
import CustomFormControlItem from "@/components/Form/CustomFormControlItem";
import { Input } from "@/components/ui/input";
import SelectCategoryFormField from "./selectCategoryFormField";

const ModifyAlbumDialogFormFields = () => {
  return (
    <>
      <FormField
        name="name"
        render={({ field }) => (
          <CustomFormControlItem label="Nazwa">
            <Input {...field} type="text" />
          </CustomFormControlItem>
        )}
      />
      <FormField
        name="description"
        render={({ field }) => (
          <CustomFormControlItem label="Opis">
            <Input {...field} type="text" />
          </CustomFormControlItem>
        )}
      />
      <SelectCategoryFormField />
    </>
  );
};

export default ModifyAlbumDialogFormFields;
