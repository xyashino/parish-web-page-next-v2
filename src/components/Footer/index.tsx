import React from "react";
import { Logo } from "@/components/Logo";
import { AuthorInfo } from "@/components/Footer/authorInfo";
import { AdminDashboardIcon } from "@/components/Footer/adminDashboardIcon";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  showAdminIcon?: true;
}

export const Footer = ({ showAdminIcon, className }: Props) => {
  const footerClassNames = cn(
    "bg-foreground w-full text-background",
    className,
  );

  return (
    <footer className={footerClassNames}>
      <div className="container px-3 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <Logo className="hover:bg-transparent text-background hover:text-background" />
        <div className="flex items-center justify-between flex-1">
          <AuthorInfo />
          {showAdminIcon && <AdminDashboardIcon />}
        </div>
      </div>
    </footer>
  );
};
