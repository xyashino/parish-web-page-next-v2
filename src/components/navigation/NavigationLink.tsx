import React from "react";
import Link from "next/link";
import { SingleNavigationItem } from "@/types/interfaces/navigation.interface";
import { cn } from "@/lib/utils";

interface Props extends SingleNavigationItem {
  className?: string;
}

const NavigationLink = ({ text, href, className, icon }: Props) => {
  const linkClasses = cn(
    "rounded space-x-2 p-4 group  flex items-center font-bold transition-colors text-foreground  text-left hover:bg-slate-200 font-mono uppercase",
    className
  );
  return (
    <Link className={linkClasses} href={href}>
      <span className="text-xl lg:text-2xl md:group-hover:scale-125  transition-transform duration-500 ease-in-out lg:p-1 rounded">
        {icon}
      </span>
      <span className="text-sm md:text-md lg:group-hover:scale-110  transition-transform duration-500 ease-in-out">
        {text}
      </span>
    </Link>
  );
};
export default NavigationLink;
