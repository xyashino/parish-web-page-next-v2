import React from "react";
import { Admin } from "@prisma/client";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { apiCall } from "@/lib/utils";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { AdministratorsTable } from "@/components/administrators/AdministratorsTable";
import { AddAdministratorDialog } from "@/components/administrators/AddAdministratorDialog";

const AdministratorsManagePage = async () => {
  const administrators = await apiCall<Admin[]>(ApiRoute.BASE_ADMINISTRATORS, {
    next: { tags: [RevalidateTag.ADMINISTRATORS] },
  });

  return (
    <div className="flex flex-col">
      <AdminPageTitle title="Zarządzaj Administatorami" />
      <AdministratorsTable data={administrators} />
      <AddAdministratorDialog />
    </div>
  );
};

export default AdministratorsManagePage;
