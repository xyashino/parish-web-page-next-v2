import { ReactNode } from "react";

interface SingleNavigationItem {
  href: string;
  text: string;
  nestedRoutes?: undefined;
  icon?: ReactNode;
}

interface NavigationGroup {
  href: string;
  text: string;
  nestedRoutes: SingleNavigationItem[];
  icon?: ReactNode;
}

type NavigationItemType = SingleNavigationItem | NavigationGroup;
