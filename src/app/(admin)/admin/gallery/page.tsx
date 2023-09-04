import React from "react";
import { Category } from "@prisma/client";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { SummaryShowFieldsCard } from "@/components/cards/SummaryShowFieldsCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { ModifyAlbumDialog } from "@/components/album/ModifyAlbumDialog";
import { AlbumsDataTable } from "@/components/album/AlbumsDataTable";
import { ModifyCategoryDialog } from "@/components/categories/ModifyCategoryDialog";
import { CategoriesDataTable } from "@/components/categories/CategoriesDataTable";
import { AlbumsResponse } from "@/types/db/album";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const AdministratorsManagePage = async () => {
  const albums = await apiCall<AlbumsResponse>(ApiRoute.BASE_ALBUMS, {
    next: { tags: [RevalidateTag.ALBUMS] },
  });
  const categories = await apiCall<Category[]>(ApiRoute.BASE_CATEGORIES, {
    next: { tags: [RevalidateTag.CATEGORIES] },
  });
  return (
    <AdminPageWrapper
      headerData={{
        title: "Zarządzaj Galerią",
      }}
      className="space-y-2 lg:space-y-6 "
    >
      <DashboardCardContainer>
        <SummaryShowFieldsCard
          values={categories}
          title="Podsumowanie Katagorii"
          emptyArrayMessage="Brak Katagorii"
        />
        <ModifyCategoryDialog />
      </DashboardCardContainer>
      <CategoriesDataTable data={categories} />

      <Separator className="w-10/12 mx-auto" />

      <DashboardCardContainer>
        <SummaryShowFieldsCard
          values={albums}
          title="Podsumowanie Albumów"
          emptyArrayMessage="Brak Albumów"
        />
        <ModifyAlbumDialog />
      </DashboardCardContainer>
      <AlbumsDataTable data={albums} />
    </AdminPageWrapper>
  );
};

export default AdministratorsManagePage;
