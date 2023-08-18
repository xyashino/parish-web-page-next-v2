import React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationItem } from "@/types/interfaces/navigation.interface";

export const ClientDesktopNavigationItem = ({
  title,
  href,
}: NavigationItem) => {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
