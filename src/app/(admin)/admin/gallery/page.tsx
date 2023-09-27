import React from "react";
import { Separator } from "@/components/ui/separator";
import { SummaryShowFieldsCard } from "@/components/cards/SummaryShowFieldsCard";
import { DashboardCardContainer } from "@/components/containers/DashboardCardContainer";
import { ModifyAlbumDialog } from "@/components/album/ModifyAlbumDialog";
import { AlbumsDataTable } from "@/components/album/AlbumsDataTable";
import { ModifyCategoryDialog } from "@/components/categories/ModifyCategoryDialog";
import { CategoriesDataTable } from "@/components/categories/CategoriesDataTable";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import { AlbumDb, CategoryDb } from "@/db/handlers/album";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const AdministratorsManagePage = async () => {
  const [albums, categories] = await Promise.all([
    AlbumDb.findAll(),
    CategoryDb.findAll(),
  ]);
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
        <ModifyAlbumDialog categories={categories} />
      </DashboardCardContainer>
      <AlbumsDataTable data={albums} />
    </AdminPageWrapper>
  );
};

export default AdministratorsManagePage;
