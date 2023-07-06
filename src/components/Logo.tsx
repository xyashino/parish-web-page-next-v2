import React from "react";
import Link from "next/link";
import ChurchIcon from "@/components/icons/ChurchIcon";
import { PageRoute } from "@/types/enums/page-route.enum";
import { cn } from "@/lib/utils";

interface Props {
  navigateTo?: string;
  className?: string;
  renderAsLink?: boolean;
}

const Logo = ({ renderAsLink = true, className, navigateTo }: Props) => {
  const logoClasses = cn(
    "flex items-center  group text-foreground space-x-2 transition-colors duration-200  hover:bg-slate-200 px-4 rounded select-none text-xl",
    className
  );

  if (renderAsLink)
    return (
      <Link className={logoClasses} href={navigateTo ?? PageRoute.CLIENT_HOME}>
        <ChurchIcon className="text-center group-hover:scale-125 transition-transform duration-500 ease-in-out" />
        <h2 className="italic align-middle">Parafia Gruszów Wielki</h2>
      </Link>
    );

  return (
    <div className={logoClasses}>
      <ChurchIcon className="text-center" />
      <h2 className="italic align-middle">Parafia Gruszów Wielki</h2>
    </div>
  );
};
export default Logo;
