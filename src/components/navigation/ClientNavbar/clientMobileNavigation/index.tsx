"use client";

import React from "react";
import { MobileNavigationSheet } from "@/components/navigation/MobileNavigationSheet";
import { CLIENT_NAVIGATION_ROUTES } from "@/config/routes/client";
import { MobileListItem } from "@/components/navigation/MobileListItem";
import { NavigationLink } from "@/components/navigation";
import { Separator } from "@/components/ui/separator";

export const ClientMobileNavigation = () => (
  <div className="block lg:hidden">
    <MobileNavigationSheet
      renderItems={(onClick) => {
        return CLIENT_NAVIGATION_ROUTES.map((item, i) => {
          return (
            <div key={i}>
              {"nestedRoutes" in item ? (
                <MobileListItem {...item} />
              ) : (
                <NavigationLink
                  {...item}
                  onClick={onClick}
                  className="text-md"
                />
              )}
              <Separator className="w-5/6 mx-auto" />
            </div>
          );
        });
      }}
    />
  </div>
);
