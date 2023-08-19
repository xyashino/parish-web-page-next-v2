import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./listItem";
import { NestedItem } from "@/types/interfaces/navigation.interface";

export const ClientDesktopNavigationNestedList = ({
  title,
  nestedRoutes,
}: NestedItem) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger> {title} </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          {nestedRoutes.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
