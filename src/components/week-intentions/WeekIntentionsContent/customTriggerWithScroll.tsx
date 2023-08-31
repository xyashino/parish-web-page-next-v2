"use client";
import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

interface Props {
  id: string;
  translatedDay: string;
  tabID: string;
}

export const CustomTriggerWithScroll = ({
  translatedDay,
  id,
  tabID,
}: Props) => {
  const handleClick = () => {
    document.getElementById(tabID)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <TabsTrigger
      key={id}
      value={id}
      className="px-4  font-extrabold capitalize text-xl flex-grow basis-1/3 md:basis-1/4 lg:basis-auto"
      onClick={handleClick}
    >
      {translatedDay}
    </TabsTrigger>
  );
};
