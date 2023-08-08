import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ADMIN_NAVIGATION_ROUTES } from "@/lib/constants/admin-navigation-routes.constant";
import { NavigationLink } from "@/components/navigation/NavigationLink";
import { LogoutAlert } from "@/components/navigation/AdminNavigationSideBar/logoutAlert";
import { AdminSidebarLogo } from "@/components/navigation/AdminNavigationSideBar/adminSidebarLogo";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {}

export const AdminNavigationSideBar = ({ className }: SidebarProps) => (
  <div className={cn("pb-12 w-1/6 flex flex-col", className)}>
    <AdminSidebarLogo />
    <div className="grow">
      <div className="px-3 py-2">
        <div className="space-y-1">
          {ADMIN_NAVIGATION_ROUTES.map(({ text, icon, href }, i) => (
            <NavigationLink
              href={href}
              text={text}
              icon={icon}
              key={`${text}-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
    <LogoutAlert />
  </div>
);
