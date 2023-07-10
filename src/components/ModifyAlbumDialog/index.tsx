"use client";
import React, { useLayoutEffect } from "react";
import CustomDialog from "@/components/CustomDialog";
import modifyAlbumSchema from "./modify-album.schema";
import ModifyAlbumDialogFormFields from "@/components/ModifyAlbumDialog/modifyAlbumDialogFormFields";
import { z } from "zod";
import { useAlbumDialogStore } from "@/lib/store/albums/useAlbumDialogStore";
import { useCategoriesStore } from "@/lib/store";
import { Category } from "@prisma/client";
import { useAlbumsStore } from "@/lib/store/albums/useAlbumsStore";
import { useCustomDialogStore } from "@/lib/store/useCustomDialogStore";

interface Props {
  categories: Category[];
}

const ModifyAlbumDialog = ({ categories }: Props) => {
  const { updateAllEntities } = useCategoriesStore();
  const { createEntity, updateEntity } = useAlbumsStore();
  const { defaultValues, resetDefaultValues, id } = useAlbumDialogStore();
  const { close } = useCustomDialogStore();

  useLayoutEffect(() => {
    updateAllEntities(categories);
  }, []);
  const onSubmit = async (values: z.infer<typeof modifyAlbumSchema>) => {
    if (id)
      return updateEntity({
        id,
        ...values,
        categoryId: values.categoryId ?? null,
        description: values.description ?? null,
      });
    await createEntity({
      ...values,
      categoryId: values.categoryId ?? null,
      description: values.description ?? null,
    });
    close();
  };
  return (
    <CustomDialog
      trigger={{
        text: "Dodaj albums",
      }}
      headerData={{
        title: "Dodajesz albums",
        subtitle: "Nazwa nie może być pusta",
      }}
      form={{
        formSchema: modifyAlbumSchema,
        onSubmit,
        defaultValues,
        className: "space-y-4",
      }}
      doBeforeClose={resetDefaultValues}
    >
      <ModifyAlbumDialogFormFields />
    </CustomDialog>
  );
};

export default ModifyAlbumDialog;
