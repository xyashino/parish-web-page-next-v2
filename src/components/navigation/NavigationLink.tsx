"use client";
import React from "react";
import { SingleNavigationItemWithIcon } from "@/types/interfaces/navigation.interface";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Props extends SingleNavigationItemWithIcon {
  className?: string;
  onClick?: () => void;
}

export const NavigationLink = ({
  text,
  href,
  className,
  icon,
  onClick,
}: Props) => {
  const path = usePathname();
  const { push } = useRouter();

  const linkClasses = cn(
    "space-x-2 font-bold  justify-normal font-mono uppercase  w-full",
    path.startsWith(href)
      ? "bg-foreground text-background hover:bg-accent-foreground hover:text-accent-background"
      : "",
    className
  );

  const handleClick = () => {
    push(href);
    onClick && onClick();
  };
  return (
    <Button variant="ghost" className={linkClasses} onClick={handleClick}>
      {!!icon && <span className="text-xl lg:text-2xl lg:p-1">{icon}</span>}
      <span className="text-sm md:text-md">{text}</span>
    </Button>
  );
};
