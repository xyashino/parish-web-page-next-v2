import React from "react";
import NavigationLink from "@/components/navigation/NavigationLink";
import MobileNavigationDropdown from "@/components/navigation/MobileNavigationDropdown";
import { ADMIN_NAVIGATION_ROUTES } from "@/lib/constants/admin-navigation-routes.constant";

const AdminNavigationSideBar = () => {
  return (
    <nav className="flex flex-col w-full h-full justify-between lg:px-2 lg:overflow-y-scroll my-2">
      <div>
        {ADMIN_NAVIGATION_ROUTES.map((route, i) => {
          const itemKey = `${route.href}-${i}}`;
          if (!route.nestedRoutes)
            return (
              <NavigationLink
                {...route}
                key={itemKey}
                className="rounded-none "
              />
            );
          return <MobileNavigationDropdown {...route} key={itemKey} />;
        })}
      </div>
    </nav>
  );
};

export default AdminNavigationSideBar;
