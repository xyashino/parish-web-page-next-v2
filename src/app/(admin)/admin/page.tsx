import React from "react";
import { AdminPageTitle } from "@/components/AdminPageTitle";
import Editor from "@/components/MdEditor/MDXEditor";

const Admin = () => {
  return (
    <>
      <AdminPageTitle title="Admin" />
      <Editor />
    </>
  );
};

export default Admin;
