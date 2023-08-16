"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { PinLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

export const AdminPageTitle = ({ title }: Props) => {
  const { back, refresh } = useRouter();
  const handleClick = () => {
    back();
    refresh();
  };

  return (
    <div className="w-full  p-6 space-y-4 rounded-xl  flex-wrap">
      <div className="flex items-center space-x-2.5">
        <Button variant="ghost" onClick={handleClick}>
          <PinLeftIcon className="text-foreground text-2xl" />
        </Button>
        <h2 className="text-2xl font-bold capitalize text-foreground ">
          {title}
        </h2>
      </div>
      <Separator className="indent-2" />
    </div>
  );
};
