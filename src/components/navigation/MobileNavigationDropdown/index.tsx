"use client";
import React, { SyntheticEvent, useState } from "react";
import { NavigationGroup } from "@/types/interfaces/navigation.interface";
import { NavigationLink } from "@/components/navigation";
import { ToggleButton } from "./toggleButton";
import { ListWrapper } from "./listWrapper";

export const MobileNavigationDropdown = ({
  nestedRoutes,
  href,
  text,
  icon,
}: NavigationGroup) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <ToggleButton {...{ isOpen, toggle, icon, text }} />
      <ListWrapper isOpen={isOpen}>
        {nestedRoutes?.map(({ icon, text, href: routeHref }, i) => (
          <NavigationLink
            key={`${routeHref}-${i}}`}
            href={`${href}/${routeHref}`}
            className="rounded-none"
            {...{ icon, text }}
          />
        ))}
      </ListWrapper>
    </div>
  );
};
