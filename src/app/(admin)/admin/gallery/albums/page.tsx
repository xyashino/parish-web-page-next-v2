import React from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import AlbumsDataTable from "@/components/data-tables/AlbumsDataTable";
import { getAlbums } from "@/lib/prisma/album";
import ModifyAlbumDialog from "@/components/ModifyAlbumDialog";
import { apiCall } from "@/lib/utils";
import { Category } from "@prisma/client";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
const AlbumsPage = async () => {
  const albums = await getAlbums();
  const categories = await apiCall<Category[]>("/api/categories", {
    next: { tags: [RevalidateTag.CATEGORIES] },
  });
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj Albumami" />
      <AlbumsDataTable data={albums} />
      <ModifyAlbumDialog categories={categories} />
    </div>
  );
};

export default AlbumsPage;
