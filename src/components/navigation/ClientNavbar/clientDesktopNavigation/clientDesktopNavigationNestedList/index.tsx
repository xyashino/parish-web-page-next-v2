import React from "react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./listItem";
import { NestedItem } from "@/types/navigation";

const calculateColSpan = (currentIndex: number, totalLength: number) => {
  return currentIndex === totalLength - 1 && totalLength % 2
    ? "lg:col-span-2"
    : "";
};

export const ClientDesktopNavigationNestedList = ({
  title,
  nestedRoutes,
}: NestedItem) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger> {title} </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          {nestedRoutes.map(({ description, ...rest }, i) => (
            <ListItem
              key={`${rest.href}-${i}`}
              {...rest}
              className={calculateColSpan(i, nestedRoutes.length)}
            >
              {description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
