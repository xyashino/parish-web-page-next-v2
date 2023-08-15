import React, { PropsWithChildren } from "react";
import { Separator } from "@/components/ui/separator";

interface Props extends PropsWithChildren {
  isOpen: boolean;
}

export const ListWrapper = ({ isOpen, children }: Props) => {
  const toggleFrames = isOpen ? "grid-rows-1fr" : "grid-rows-0fr";

  return (
    <div
      className={`relative grid overflow-hidden transition-all duration-500 ease-in-out ${toggleFrames}`}
    >
      <div className="flex min-h-0 w-full flex-col px-2"> {children} </div>
      <Separator className="w-5/6 mx-auto" />
    </div>
  );
};
