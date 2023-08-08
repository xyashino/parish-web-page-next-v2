"use client";
import React from "react";
import { SingleNavigationItem } from "@/types/interfaces/navigation.interface";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface Props extends SingleNavigationItem {
  className?: string;
}

const NavigationLink = ({ text, href, className, icon }: Props) => {
  const path = usePathname();
  const { push } = useRouter();
  const linkClasses = cn(
    "rounded space-x-2 p-2 group  flex items-center font-bold transition-colors text-left font-mono uppercase  w-full",
    path.startsWith(href) ? "bg-foreground text-background" : "hover:bg-muted",
    className
  );
  return (
    <button className={linkClasses} onClick={() => push(href)}>
      {!!icon && (
        <span className="text-xl lg:text-2xl  transition-transform duration-500 ease-in-out lg:p-1 rounded">
          {icon}
        </span>
      )}
      <span className="text-sm md:text-md transition-transform duration-500 ease-in-out">
        {text}
      </span>
    </button>
  );
};
export default NavigationLink;
