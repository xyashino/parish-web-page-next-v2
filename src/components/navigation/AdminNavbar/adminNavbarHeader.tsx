"use client";
import React from "react";
import { Logo } from "@/components/Logo";
import { Navigation } from "@/types/enums";
import { MobileNavigationSheet } from "../MobileNavigationSheet";
import { SingleNavigationItemWithIcon } from "@/types/interfaces/navigation.interface";
import { NavigationLink } from "@/components/navigation/NavigationLink";

interface Props {
  navigationRoutes: SingleNavigationItemWithIcon[];
}

export const AdminNavbarHeader = ({ navigationRoutes }: Props) => {
  return (
    <div className="py-5 px-2 xl:px-3.5 2xl:px-5 space-y-1 bg-foreground flex justify-between">
      <Logo
        className="hover:bg-transparent font-bold p-0 hover:text-background text-background ml-4 lg:ml-0 focus:bg-transparent focus:text-background focus:underline"
        navigateTo={Navigation.ADMIN_HOME}
      />
      <MobileNavigationSheet
        renderItems={(onClick) =>
          navigationRoutes.map((route, i) => (
            <NavigationLink
              key={`${route.href}-${i}`}
              onClick={onClick}
              {...route}
            />
          ))
        }
        showLogout={true}
      />
    </div>
  );
};
