import React from "react";
import { Album, Category } from "@prisma/client";
import { ApiRoute, RevalidateTag } from "@/types/enums";

import { apiCall } from "@/lib/utils";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { Separator } from "@/components/ui/separator";
import { SummaryShowFieldsCard } from "@/components/cards/SummaryShowFieldsCard";
import { AlbumsDataTable, ModifyAlbumDialog } from "@/components/album";
import {
  CategoriesDataTable,
  ModifyCategoryDialog,
} from "@/components/categories";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";

const AdministratorsManagePage = async () => {
  const albums = await apiCall<Album[]>(ApiRoute.BASE_ALBUMS, {
    next: { tags: [RevalidateTag.ALBUMS] },
  });
  const categories = await apiCall<Category[]>(ApiRoute.BASE_CATEGORIES, {
    next: { tags: [RevalidateTag.CATEGORIES] },
  });
  return (
    <div className="flex flex-col space-y-2 lg:space-y-6 mb-4">
      <AdminPageTitle title="Zarządzaj Galerią" />
      <DashboardCardContainer>
        <SummaryShowFieldsCard
          values={albums}
          title="Podsumowanie Albumów"
          emptyArrayMessage="Brak Albumów"
        />
        <ModifyAlbumDialog />
      </DashboardCardContainer>
      <AlbumsDataTable data={albums} />

      <Separator className="w-10/12 mx-auto" />

      <DashboardCardContainer>
        <SummaryShowFieldsCard
          values={categories}
          title="Podsumowanie Katagorii"
          emptyArrayMessage="Brak Katagorii"
        />
        <ModifyCategoryDialog />
      </DashboardCardContainer>
      <CategoriesDataTable data={categories} />
    </div>
  );
};

export default AdministratorsManagePage;
