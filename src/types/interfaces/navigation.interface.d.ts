import React from "react";

interface SingleNavigationItemWithIcon {
  href: string;
  text: string;
  nestedRoutes?: undefined;
  icon?: React.ReactNode;
}

interface SingleNavigationItem {
  href: string;
  title: string;
  description?: string;
}

interface NestedItem {
  title: string;
  nestedRoutes: SingleNavigationItem[];
}

export interface NavigationItem {
  title: string;
  href: string;
}

type NestedNavigationItem = NavigationItem | NestedItem;
