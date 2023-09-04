import React from "react";
import { PageTitleWithPrevBtn } from "@/components/PageTitleWithPrevBtn";
import { LoadingElement } from "@/components/LoadingElement";

const Admin = () => {
  return (
    <>
      <PageTitleWithPrevBtn title="Admin" />
      <LoadingElement />
    </>
  );
};

export default Admin;
