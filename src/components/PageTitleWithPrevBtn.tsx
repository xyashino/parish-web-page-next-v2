"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { PinLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description?: string | null;
}

export const PageTitleWithPrevBtn = ({ title, description }: Props) => {
  const { back, refresh } = useRouter();
  const handleClick = () => {
    back();
    refresh();
  };

  return (
    <div className="w-full p-2 lg:p-6 space-y-2 lg:space-y-4 rounded-xl  flex-wrap">
      <div className="flex items-center space-x-2.5">
        <Button variant="ghost" onClick={handleClick}>
          <PinLeftIcon className="text-foreground text-2xl" />
        </Button>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold capitalize text-foreground  text-center">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <Separator className="indent-2" />
    </div>
  );
};
