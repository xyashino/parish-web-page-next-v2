import React from "react";

interface SingleNavigationItem {
  href: string;
  text: string;
  nestedRoutes?: undefined;
  icon?: React.ReactNode;
}

interface NavigationGroup {
  href: string;
  text: string;
  nestedRoutes: SingleNavigationItem[];
  icon?: React.ReactNode;
}
