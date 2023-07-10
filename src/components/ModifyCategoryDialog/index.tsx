"use client";
import React from "react";
import CustomDialog from "@/components/CustomDialog";
import modifyCategorySchema from "./modify-category.schema";
import { useCategoryDialogStore } from "@/lib/store/categories/useCategoryDialogStore";
import ModifyCategoryDialogFormFields from "./modifyCategoryDialogFormFields";
import { z } from "zod";
import { useCategoriesStore } from "@/lib/store/categories/useCategoriesStore";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";

const ModifyCategoryDialog = () => {
  const { updateEntity, createEntity } = useCategoriesStore();
  const { close } = useCustomDialogStore();
  const { defaultValues, id, resetDefaultValues } = useCategoryDialogStore();

  const toggleHeaderTitle = !id
    ? "Tworzysz Kategorie"
    : `Edytujesz Kategorie  "${defaultValues.name}"`;

  const toggleHeaderSubtitle = !id
    ? "Dodaj Kategorie do swojej kolekcji"
    : "Edytuj Kategorie";

  const onSubmit = async (values: z.infer<typeof modifyCategorySchema>) => {
    if (id) return updateEntity({ id, ...values });
    await createEntity({ ...values });
    close();
  };

  return (
    <CustomDialog
      trigger={{
        text: "Utwórz Kategorie",
      }}
      headerData={{
        title: toggleHeaderTitle,
        subtitle: toggleHeaderSubtitle,
      }}
      form={{
        formSchema: modifyCategorySchema,
        defaultValues: defaultValues,
        onSubmit,
        className: "space-y-4",
      }}
      doBeforeClose={resetDefaultValues}
    >
      <ModifyCategoryDialogFormFields />
    </CustomDialog>
  );
};
export default ModifyCategoryDialog;
