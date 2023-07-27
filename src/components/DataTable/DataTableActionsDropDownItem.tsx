import React, { SyntheticEvent } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  text: string;
  Icon: React.FC;
  onClick?: (e?: SyntheticEvent) => void;
}

const DataTableActionsDropDownItem = ({
  className,
  text,
  Icon,
  onClick,
}: Props) => {
  const classes = cn(
    "flex items-center justify-between w-full mx-2 text-foreground",
    className
  );
  return (
    <DropdownMenuItem className="cursor-pointer" onClick={onClick}>
      <span className={classes}>
        <span>{text}</span>
        <Icon />
      </span>
    </DropdownMenuItem>
  );
};

export default DataTableActionsDropDownItem;
