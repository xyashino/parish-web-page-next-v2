"use client";
import React, { SyntheticEvent } from "react";
import { Separator } from "@/components/ui/separator";
import { PinLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
}

const AdminPageTitle = ({ title }: Props) => {
  const { back } = useRouter();
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    back();
  };

  return (
    <div className="w-full flex p-4 rounded-xl items-center">
      <Button variant="ghost" onClick={handleClick}>
        <PinLeftIcon className="text-foreground text-2xl" />
      </Button>
      <div className="w-full  space-y-2">
        <h2 className="text-3xl indent-2 italic capitalize font-light text-foreground">
          {title}
        </h2>
        <Separator className="indent-2" />
      </div>
    </div>
  );
};

export default AdminPageTitle;
