import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { AdminNavbarHeader } from "./adminNavbarHeader";
import * as crypto from "crypto";
import { LogoutAlert } from "@/components/alerts/LogoutAlert";
import { ADMIN_NAVIGATION_ROUTES } from "@/config/routes/admin";
import { NavigationLink } from "@/components/navigation/NavigationLink";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const AdminNavbar = ({ className }: SidebarProps) => (
  <div
    className={cn(
      "lg:pb-12 w-full lg:w-1/4  xl:w-1/5 2xl:w-1/6  shadow-lg z-20 flex flex-col",
      className,
    )}
    tabIndex={0}
  >
    <AdminNavbarHeader navigationRoutes={ADMIN_NAVIGATION_ROUTES} />
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
