import React, { SyntheticEvent } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";

interface Props {
  className?: string;
  text: string;
  Icon: React.FC;
  onClick?: (e?: SyntheticEvent) => void;
}

export const DataTableActionsDropDownItem = ({
  className,
  text,
  Icon,
  onClick,
}: Props) => (
  <DropdownMenuItem className="cursor-pointer" asChild>
    <ButtonWithIcon
      Icon={Icon}
      text={text}
      onClick={onClick}
      className={cn("w-full cursor-pointer", className)}
      variant="ghost"
    />
  </DropdownMenuItem>
);
