"use client";
import React from "react";
import { SingleNavigationItemWithIcon } from "@/types/navigation";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface Props extends SingleNavigationItemWithIcon {
  className?: string;
  onClick?: () => void;
}

export const NavigationLink = ({
  title,
  href,
  className,
  icon,
  onClick,
}: Props) => {
  const path = usePathname();
  const { push } = useRouter();

  const linkClasses = cn(
    navigationMenuTriggerStyle(),
    "space-x-2 font-semibold  justify-normal  uppercase w-full",
    path.startsWith(href)
      ? "bg-foreground text-background hover:bg-accent-foreground hover:text-accent-background"
      : "",
    className,
  );

  const handleClick = () => {
    push(href);
    onClick && onClick();
  };
  return (
    <Button variant="ghost" className={linkClasses} onClick={handleClick}>
      {!!icon && <span className="text-xl lg:text-2xl lg:p-1">{icon}</span>}
      <span className="text-md truncate">{title}</span>
    </Button>
  );
};
