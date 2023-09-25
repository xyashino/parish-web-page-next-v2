"use client";
import React from "react";
import { z } from "zod";
import { CustomDialog } from "@/components/CustomDialog";
import { CustomFormInputItem } from "@/components/form";
import { useRouter } from "next/navigation";
import { createAdministratorApiCall } from "@/lib/services/administrators";
import { emailSchema } from "@/lib/schemas/default";

export const AddAdministratorDialog = () => {
  const { refresh } = useRouter();

  const submitMethod = async (values: z.infer<typeof emailSchema>) => {
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
        formSchema: emailSchema,
        onSubmit: submitMethod,
      }}
      submitText="Dodaj"
    >
      <CustomFormInputItem fieldName="email" type="email" />
    </CustomDialog>
  );
};
