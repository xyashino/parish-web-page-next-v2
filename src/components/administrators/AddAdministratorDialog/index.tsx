"use client";
import React from "react";
import { z } from "zod";
import { CustomDialog } from "@/components/CustomDialog";
import { FormField } from "@/components/ui/form";
import { CustomFormControlItem } from "@/components/Form/CustomFormControlItem";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { createAdministratorApiCall } from "@/lib/services/administrators/api-calls";
import { addAdministratorSchema } from "@/lib/schemas/administrators";

export const AddAdministratorDialog = () => {
  const { refresh } = useRouter();

  const submitMethod = async (
    values: z.infer<typeof addAdministratorSchema>
  ) => {
    await createAdministratorApiCall(values);
    refresh();
  };

  return (
    <CustomDialog
      trigger={{
        text: "Utwórz Administratora",
      }}
      headerData={{
        title: "Dodaj Administratora",
        subtitle: "Podaj email administratora, aby mógł się zalogować.",
      }}
      form={{
        formSchema: addAdministratorSchema,
        onSubmit: submitMethod,
      }}
      submitText="Dodaj"
    >
      <FormField
        name="email"
        render={({ field }) => (
          <CustomFormControlItem label="Email:">
            <Input {...field} type="text" />
          </CustomFormControlItem>
        )}
      />
    </CustomDialog>
  );
};
