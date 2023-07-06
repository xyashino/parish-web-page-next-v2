"use client";
import React, { SyntheticEvent, useState } from "react";
import ToggleButton from "@/components/navigation/MobileNavigationDropdown/toggleButton";
import { NavigationGroup } from "@/types/interfaces/navigation.interface";
import ListWrapper from "@/components/navigation/MobileNavigationDropdown/listWrapper";
import NavigationLink from "@/components/navigation/NavigationLink";

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
        {nestedRoutes?.map((route, i) => {
          const key = `${route.href}-${i}}`;
          return (
            <NavigationLink
              key={key}
              href={`${href}/${route.href}`}
              text={route.text}
              className="rounded-none"
              icon={route.icon}
            />
          );
        })}
      </ListWrapper>
    </div>
  );
};
export default MobileNavigationDropdown;
