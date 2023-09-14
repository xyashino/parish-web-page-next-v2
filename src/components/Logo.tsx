"use client";
import React from "react";
import Link from "next/link";
import { ChurchIcon } from "@/components/icons/ChurchIcon";
import { Navigation } from "@/types/enums";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface Props {
  navigateTo?: string;
  className?: string;
  renderAsLink?: boolean;
}

const LOGO_CLASSES = navigationMenuTriggerStyle();

export const Logo = ({ renderAsLink = true, className, navigateTo }: Props) => {
  const logoClasses = cn(
    LOGO_CLASSES,
    "text-xl space-x-4 bg-transparent",
    className,
  );

  if (renderAsLink)
    return (
      <Link className={logoClasses} href={navigateTo ?? Navigation.CLIENT_HOME}>
        <ChurchIcon className="text-center transition-transform duration-500 ease-in-out" />
        <span className="italic align-middle">Parafia Gruszów Wielki</span>
      </Link>
    );

  return (
    <div className={logoClasses}>
      <ChurchIcon className="text-center" />
      <h2 className="italic align-middle">Parafia Gruszów Wielki</h2>
    </div>
  );
};
