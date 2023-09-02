import React from "react";
import { apiCall } from "@/lib/utils";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { AdministratorsTable } from "@/components/administrators/AdministratorsTable";
import { AddAdministratorDialog } from "@/components/administrators/AddAdministratorDialog";
import { AdministratorsResponse } from "@/types/db/administrator";
import { ApiRoute, RevalidateTag } from "@/types/enums";

const AdministratorsManagePage = async () => {
  const administrators = await apiCall<AdministratorsResponse>(
    ApiRoute.BASE_ADMINISTRATORS,
    {
      next: { tags: [RevalidateTag.ADMINISTRATORS] },
    },
  );
  return (
    <div className="flex flex-col">
      <AdminPageTitle title="Zarządzaj Administatorami" />
      <AdministratorsTable data={administrators} />
      <AddAdministratorDialog />
    </div>
  );
};

export default AdministratorsManagePage;
