import React from "react";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ChurchIcon from "@/components/icons/ChurchIcon";

export const MobileNavigationSheetHeader = () => (
  <SheetHeader className="select-none">
    <SheetTitle className="flex items-center space-x-2 text-md text-xl md:text-2xl">
      <ChurchIcon />
      <span>Parafia Gruszów Wielki</span>
    </SheetTitle>
  </SheetHeader>
);
