import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ADMIN_NAVIGATION_ROUTES } from "@/lib/constants/admin-navigation-routes.constant";
import { NavigationLink } from "@/components/navigation";
import { AdminSidebarHeader } from "./adminSidebarHeader";
import * as crypto from "crypto";
import { LogoutAlert } from "@/components/alerts/LogoutAlert";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const AdminNavigationSideBar = ({ className }: SidebarProps) => (
  <div
    className={cn(
      "lg:pb-12 w-full lg:w-1/4  xl:w-1/5 2xl:w-1/6  shadow-lg z-20 flex flex-col",
      className
    )}
    tabIndex={0}
  >
    <AdminSidebarHeader navigationRoutes={ADMIN_NAVIGATION_ROUTES} />
    <div className="md:grow hidden lg:block">
      <div className="md:px-3 p-1 md:py-2">
        <div className="lg:space-y-1 flex lg:block flex-wrap sm:flex-nowrap">
          {ADMIN_NAVIGATION_ROUTES.map((route) => (
            <NavigationLink key={crypto.randomUUID()} {...route} />
          ))}
        </div>
      </div>
    </div>
    <LogoutAlert className="hidden lg:block" />
  </div>
);
