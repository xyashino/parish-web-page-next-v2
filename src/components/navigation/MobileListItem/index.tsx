"use client";
import React, { SyntheticEvent, useState } from "react";
import { ToggleButton } from "./toggleButton";
import { ListWrapper } from "./listWrapper";
import { NestedItem } from "@/types/interfaces/navigation.interface";
import { NavigationLink } from "@/components/navigation/NavigationLink";

export const MobileListItem = ({ title, nestedRoutes }: NestedItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <ToggleButton {...{ isOpen, toggle, title }} />
      <ListWrapper isOpen={isOpen}>
        {nestedRoutes?.map(({ href, title }, i) => (
          <NavigationLink
            key={`${href}-${i}}`}
            href={href}
            className="rounded-none"
            title={title}
          />
        ))}
      </ListWrapper>
    </div>
  );
};
