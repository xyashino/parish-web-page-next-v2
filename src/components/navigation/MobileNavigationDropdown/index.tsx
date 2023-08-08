"use client";
import React, { SyntheticEvent, useState } from "react";
import ToggleButton from "@/components/navigation/MobileNavigationDropdown/toggleButton";
import { NavigationGroup } from "@/types/interfaces/navigation.interface";
import ListWrapper from "@/components/navigation/MobileNavigationDropdown/listWrapper";
import { NavigationLink } from "@/components/navigation/NavigationLink";

const MobileNavigationDropdown = ({
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
export default MobileNavigationDropdown;
