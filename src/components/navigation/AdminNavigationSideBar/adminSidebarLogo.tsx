import React from "react";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/types/enums/navigation.enum";

export const AdminSidebarLogo = () => {
  return (
    <div className="p-5 space-y-1 bg-foreground">
      <Logo
        className="hover:bg-transparent font-bold p-0 text-background"
        navigateTo={Navigation.ADMIN_HOME}
      />
    </div>
  );
};
