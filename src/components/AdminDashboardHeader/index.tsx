import React from "react";
import LogoutAlert from "@/components/AdminDashboardHeader/logoutAlert";
import LogoWithDescription from "@/components/AdminDashboardHeader/logoWithDescription";

const AdminDashboardHeader = () => {
  return (
    <header className="flex items-center justify-between px-8 p-4 bg-foreground">
      <LogoWithDescription />
      <LogoutAlert />
    </header>
  );
};

export default AdminDashboardHeader;
