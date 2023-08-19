"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export interface CopyItemProps {
  triggerText: string;
  copyText: string;
}

export const CopyItem = ({ triggerText }: CopyItemProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const changeState = (state: boolean, isClick: boolean) => {
    if (isClick) return setIsCopied(state);
    if (!state) return setIsCopied(state);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(triggerText);
    changeState(true, true);
  };

  return (
    <TooltipProvider>
      <Tooltip
        open={isCopied}
        onOpenChange={(e) => changeState(e, false)}
        disableHoverableContent={false}
      >
        <TooltipTrigger
          onClick={handleCopy}
          className="mt-2 text-sm text-destructive hover:underline"
        >
          {triggerText}
        </TooltipTrigger>
        <TooltipContent>
          <p>Skopiowano do schowka</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
