import React from "react";
import { SheetFooter } from "@/components/ui/sheet";
import { LogoutAlert } from "@/components/alerts/LogoutAlert";

export const MobileNavigationSheetLogoutFooter = () => (
  <SheetFooter className="mt-auto">
    <LogoutAlert />
  </SheetFooter>
);
