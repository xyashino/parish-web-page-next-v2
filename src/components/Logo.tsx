import React from "react";
import Link from "next/link";
import ChurchIcon from "@/components/icons/ChurchIcon";
import { Navigation } from "@/types/enums";
import { cn } from "@/lib/utils";

interface Props {
  navigateTo?: string;
  className?: string;
  renderAsLink?: boolean;
}

const LOGO_CLASSES =
  "flex items-center  group text-foreground space-x-2 transition-colors duration-200  hover:bg-slate-200 px-4 rounded select-none text-xl";

export const Logo = ({ renderAsLink = true, className, navigateTo }: Props) => {
  const logoClasses = cn(LOGO_CLASSES, className);

  if (renderAsLink)
    return (
      <Link className={logoClasses} href={navigateTo ?? Navigation.CLIENT_HOME}>
        <ChurchIcon className="text-center group-hover:scale-125 transition-transform duration-500 ease-in-out" />
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
