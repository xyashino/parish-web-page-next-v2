import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import CategoriesDataTable from "@/components/data-tables/CategoriesDataTable";
import ModifyCategoryDialog from "@/components/ModifyCategoryDialog";
import { apiCall } from "@/lib/utils";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { Category } from "@prisma/client";
const CategoriesPage = async () => {
  const categories = await apiCall<Category[]>("/api/categories", {
    next: { tags: [RevalidateTag.CATEGORIES] },
  });
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj Kategoriami" />
      <CategoriesDataTable data={categories} />
      <ModifyCategoryDialog />
    </div>
  );
};

export default CategoriesPage;
