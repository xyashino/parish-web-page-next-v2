"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ClientDesktopNavigationNestedList } from "./clientDesktopNavigationNestedList";
import { ClientDesktopNavigationItem } from "./clientDesktopNavigationItem";
import { CLIENT_NAVIGATION_ROUTES } from "@/config/routes/client";
import { Logo } from "@/components/Logo";

export const ClientDesktopNavigation = () => (
  <section className="p-4 flex w-full justify-around">
    <Logo />
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {CLIENT_NAVIGATION_ROUTES.map((item, i) => {
            const keyId = i;
            if ("href" in item)
              return <ClientDesktopNavigationItem key={keyId} {...item} />;
            return <ClientDesktopNavigationNestedList key={keyId} {...item} />;
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </section>
);
