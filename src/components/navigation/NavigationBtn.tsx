import React from "react";
import Link from "next/link";

import { PageRoute } from "@/types/enums/page-route.enum";
import { Button } from "@/components/ui/button";
import AddIcon from "@/components/icons/AddIcon";

interface Props {
  href: PageRoute;
  buttonText: string;
}

const NavigationBtn = ({ href, buttonText }: Props) => {
  return (
    <Button className="min-w-1/4  mx-auto shadow drop-shadow-lg">
      <Link href={href} className="space-x-4 flex items-center group">
        <p className="text-2xl group-hover:rotate-45 transition-transform">
          <AddIcon />
        </p>
        <p className="font-extrabold uppercase group-hover:scale-105 transition-transform text-center w-full">
          {buttonText}
        </p>
      </Link>
    </Button>
  );
};
export default NavigationBtn;
