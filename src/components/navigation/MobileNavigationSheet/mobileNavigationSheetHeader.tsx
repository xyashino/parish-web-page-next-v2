import React from "react";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import ChurchIcon from "@/components/icons/ChurchIcon";

export const MobileNavigationSheetHeader = () => (
  <SheetHeader>
    <SheetTitle className="flex items-center space-x-2">
      <ChurchIcon />
      <span>Parafia Gruszów Wielki</span>
    </SheetTitle>
  </SheetHeader>
);
