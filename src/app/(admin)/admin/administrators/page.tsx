import React from "react";
import { apiCall } from "@/lib/utils";
import { AdministratorsTable } from "@/components/administrators/AdministratorsTable";
import { AddAdministratorDialog } from "@/components/administrators/AddAdministratorDialog";
import { AdministratorsResponse } from "@/types/db/administrator";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const AdministratorsManagePage = async () => {
  const administrators = await apiCall<AdministratorsResponse>(
    ApiRoute.BASE_ADMINISTRATORS,
    {
      next: { tags: [RevalidateTag.ADMINISTRATORS] },
    },
  );
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
