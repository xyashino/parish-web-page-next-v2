import React from "react";
import { LogoutAlert } from "./logoutAlert";
import { LogoWithDescription } from "./logoWithDescription";

const AdminDashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 p-4 bg-foreground">
      <LogoWithDescription />
      <LogoutAlert />
    </header>
  );
};

export default AdminDashboardHeader;
