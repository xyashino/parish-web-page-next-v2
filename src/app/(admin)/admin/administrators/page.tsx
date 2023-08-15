import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { apiCall } from "@/lib/utils";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { Admin } from "@prisma/client";
import { ApiRoute } from "@/types/enums/api-route.enum";
import {
  AddAdministratorDialog,
  AdministratorsTable,
} from "@/components/administrators";

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
