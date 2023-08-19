"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ClientDesktopNavigationNestedList } from "./clientDesktopNavigationNestedList";
import { ClientDesktopNavigationItem } from "./clientDesktopNavigationItem";
import { CLIENT_NAVIGATION_ROUTES } from "@/config/routes/client";

export const ClientDesktopNavigation = () => (
  <NavigationMenu className="hidden lg:block">
    <NavigationMenuList>
      {CLIENT_NAVIGATION_ROUTES.map((item, i) => {
        const keyId = i;
        if ("href" in item)
          return <ClientDesktopNavigationItem key={keyId} {...item} />;
        return <ClientDesktopNavigationNestedList key={keyId} {...item} />;
      })}
    </NavigationMenuList>
  </NavigationMenu>
);
