"use client";
import React from "react";
import { z } from "zod";
import { CustomDialog } from "@/components/CustomDialog";

import { modifyCategorySchema } from "@/lib/schemas/categories";
import { useCategoryDialogStore } from "@/lib/store/useCategoryDialogStore";
import { ModifyCategoryDialogFormFields } from "./modifyCategoryDialogFormFields";
import { CategoriesApiService } from "@/lib/services/categories";
import { useRouter } from "next/navigation";

export const ModifyCategoryDialog = () => {
  const { defaultValues, id, close, isOpen, setIsOpen } =
    useCategoryDialogStore();
  const { refresh } = useRouter();

  const toggleHeaderTitle = !id
    ? "Tworzysz Kategorie"
    : `Edytujesz Kategorie  "${defaultValues.name}"`;

  const toggleHeaderSubtitle = !id ? "Według kategori są grupowane Albumy" : "";

  const onSubmit = async (values: z.infer<typeof modifyCategorySchema>) => {
    if (id) {
      await CategoriesApiService.update(id, { ...values });
    } else {
      await CategoriesApiService.create({ ...values });
    }
    refresh();
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
        defaultValues,
        onSubmit,
        className: "space-y-4",
      }}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <ModifyCategoryDialogFormFields />
    </CustomDialog>
  );
};
