import React from "react";
import { Category } from "@prisma/client";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import { apiCall } from "@/lib/utils";
import { ModifyCategoryDialog } from "@/components/categories/ModifyCategoryDialog";
import { CategoriesDataTable } from "@/components/categories/CategoriesDataTable";

const CategoriesPage = async () => {
  const categories = await apiCall<Category[]>(ApiRoute.BASE_CATEGORIES, {
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
