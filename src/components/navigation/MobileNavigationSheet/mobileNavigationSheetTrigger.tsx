import React from "react";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const MobileNavigationSheetTrigger = () => (
  <SheetTrigger asChild className="lg:hidden">
    <Button variant="ghost">
      <HamburgerMenuIcon className="w-6 h-6 text-black" />
    </Button>
  </SheetTrigger>
);
