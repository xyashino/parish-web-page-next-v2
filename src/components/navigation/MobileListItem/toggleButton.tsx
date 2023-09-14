import React, { ReactNode, SyntheticEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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
          "bg-foreground text-background hover:bg-accent-foreground hover:text-accent-background",
      )}
    >
      <div className="flex items-center space-x-4">
        {!!icon && <span className="text-2xl">{icon}</span>}
        <h2 className="font-bold uppercase text-md">{title}</h2>
      </div>
      <ChevronDownIcon className={cn("transition-transform", toggleIcon)} />
    </Button>
  );
};
