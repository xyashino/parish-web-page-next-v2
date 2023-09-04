import React from "react";
import { LoadingElement } from "@/components/LoadingElement";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";

const Admin = () => {
  return (
    <>
      <AdminPageWrapper
        headerData={{
          title: "Strona główna ",
        }}
      >
        <LoadingElement />
      </AdminPageWrapper>
    </>
  );
};

export default Admin;
