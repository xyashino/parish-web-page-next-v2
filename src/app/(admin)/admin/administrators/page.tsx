import React from "react";
import { AdministratorsTable } from "@/components/administrators/AdministratorsTable";
import { AddAdministratorDialog } from "@/components/administrators/AddAdministratorDialog";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { AdministratorDb } from "@/db/handlers/adminstrator";

const AdministratorsManagePage = async () => {
  const administrators = await AdministratorDb.findAll();
  return (
    <AdminPageWrapper
      headerData={{
        title: "Zarządzaj Administratorami",
      }}
    >
      <AdministratorsTable data={administrators} />
      <AddAdministratorDialog />
    </AdminPageWrapper>
  );
};

export default AdministratorsManagePage;
