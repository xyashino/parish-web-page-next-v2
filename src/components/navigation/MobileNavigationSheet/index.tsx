"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MobileNavigationSheetTrigger } from "./mobileNavigationSheetTrigger";
import { MobileNavigationSheetHeader } from "./mobileNavigationSheetHeader";
import { MobileNavigationSheetLogoutFooter } from "./mobileNavigationSheetLogoutFooter";

interface Props {
  showLogout?: boolean;
  renderItems: (onClick: () => void) => React.ReactNode[];
  triggerClassName?: string;
}

export const MobileNavigationSheet = ({
  showLogout,
  renderItems,
  triggerClassName,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <MobileNavigationSheetTrigger className={triggerClassName} />
      <SheetContent className="overflow-y-scroll">
        <MobileNavigationSheetHeader />
        <div className="grid gap-4 py-4 grow">
          <Separator className="w-5/6 mx-auto" />
          {renderItems(() => setOpen(false))}
        </div>
        {showLogout && <MobileNavigationSheetLogoutFooter />}
      </SheetContent>
    </Sheet>
  );
};
