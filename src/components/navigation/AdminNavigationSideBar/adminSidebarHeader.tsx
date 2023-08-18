import React from "react";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/types/enums";
import { MobileNavigationSheet } from "../MobileNavigationSheet";
import { SingleNavigationItem } from "@/types/interfaces/navigation.interface";

interface Props {
  navigationRoutes: SingleNavigationItem[];
}

export const AdminSidebarHeader = ({ navigationRoutes }: Props) => {
  return (
    <div className="py-5 px-2 xl:px-3.5 2xl:px-5 space-y-1 bg-foreground flex justify-between">
      <Logo
        className="hover:bg-transparent font-bold p-0 text-background ml-4 lg:ml-0"
        navigateTo={Navigation.ADMIN_HOME}
      />
      <MobileNavigationSheet
        navigationRoutes={navigationRoutes}
        showLogout={true}
      />
    </div>
  );
};
