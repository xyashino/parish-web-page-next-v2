import React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  text: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const DataTableActionItem = ({ className, text, icon, onClick }: Props) => {
  const classes = cn(
    "flex items-center justify-between w-full mx-2 text-foreground",
    className
  );
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={onClick}>
      <span className={classes}>
        <span>{text}</span>
        {icon}
      </span>
    </DropdownMenuItem>
  );
};

export default DataTableActionItem;
