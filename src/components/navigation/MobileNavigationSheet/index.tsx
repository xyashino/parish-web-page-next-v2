"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { NavigationLink } from "@/components/navigation";
import { SingleNavigationItem } from "@/types/interfaces/navigation.interface";
import { MobileNavigationSheetTrigger } from "./mobileNavigationSheetTrigger";
import { MobileNavigationSheetHeader } from "./mobileNavigationSheetHeader";
import { MobileNavigationSheetLogoutFooter } from "./mobileNavigationSheetLogoutFooter";

interface Props {
  navigationRoutes: SingleNavigationItem[];
  showLogout?: boolean;
}

export const MobileNavigationSheet = ({
  navigationRoutes,
  showLogout,
}: Props) => {
  const [open, setOpen] = useState(false);
  const closeSheet = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <MobileNavigationSheetTrigger />
      <SheetContent>
        <MobileNavigationSheetHeader />
        <div className="grid gap-4 py-4 grow">
          <Separator className="w-5/6 mx-auto" />
          {navigationRoutes.map((route, i) => (
            <NavigationLink
              key={`${route.href}-${i}`}
              onClick={closeSheet}
              {...route}
            />
          ))}
        </div>
        {showLogout && <MobileNavigationSheetLogoutFooter />}
      </SheetContent>
    </Sheet>
  );
};
