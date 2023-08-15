import React from "react";
import Link from "next/link";

import { Navigation } from "@/types/enums";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
interface Props {
  href: Navigation;
  buttonText: string;
}

export const NavigationBtn = ({ href, buttonText }: Props) => {
  return (
    <Button className="min-w-1/4 mx-auto shadow drop-shadow-lg hover:bg-accent-foreground">
      <Link href={href} className="space-x-1 flex items-center group">
        <p className="text-2xl group-hover:scale-125 transition-transform">
          <PlusCircledIcon />
        </p>
        <p className="capitalize transition-transform text-center w-full">
          {buttonText}
        </p>
      </Link>
    </Button>
  );
};
