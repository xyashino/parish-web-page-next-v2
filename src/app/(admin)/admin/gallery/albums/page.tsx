import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";

const AlbumsPage = async () => {
  return (
    <div className="flex flex-col space-y-6">
      <AdminPageTitle title="Zarządzaj Albumami" />
    </div>
  );
};

export default AlbumsPage;
