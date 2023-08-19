import React, { ReactNode, SyntheticEvent } from "react";
import DropdownIcon from "@/components/icons/DropdownIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  toggle: (e: SyntheticEvent) => void;
  icon?: ReactNode;
  title: string;
}

export const ToggleButton = ({ toggle, isOpen, title, icon }: Props) => {
  const toggleIcon = isOpen ? "rotate-180" : "rotate-0";
  return (
    <Button
      variant="ghost"
      onClick={toggle}
      className={cn(
        "w-full justify-between",
        isOpen &&
          "bg-foreground text-background hover:bg-accent-foreground hover:text-accent-background"
      )}
    >
      <div className="flex items-center space-x-4">
        {!!icon && <span className="text-2xl">{icon}</span>}
        <h2 className="font-bold uppercase text-md">{title}</h2>
      </div>
      <DropdownIcon className={cn("transition-transform", toggleIcon)} />
    </Button>
  );
};
