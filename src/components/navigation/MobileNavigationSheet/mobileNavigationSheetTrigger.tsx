import React from "react";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export const MobileNavigationSheetTrigger = ({
  className,
}: {
  className?: string;
}) => (
  <SheetTrigger asChild className="lg:hidden">
    <Button variant="ghost" className={className}>
      <HamburgerMenuIcon className={cn("w-6 h-6 text-black", className)} />
    </Button>
  </SheetTrigger>
);
