"use client";
import React from "react";
import CustomDialog from "@/components/CustomDialog";
import { useModifyAlbumLogic } from "@/lib/hooks/useModifyAlbumLogic";
import { modifyAlbumSchema } from "./modify-album.schema";
import { ModifyAlbumDialogFormFields } from "./modifyAlbumDialogFormFields";

const ModifyAlbumDialog = () => {
  const { submitMethod, resetDefaultValues, defaultValues, headerData } =
    useModifyAlbumLogic();
  return (
    <CustomDialog
      trigger={{ text: "Dodaj Zdjęcie" }}
      headerData={headerData}
      form={{
        formSchema: modifyAlbumSchema,
        onSubmit: submitMethod,
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
