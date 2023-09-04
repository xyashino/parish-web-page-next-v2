import React from "react";
import Image from "next/image";
import { Navigation } from "@/types/enums";
import { Logo } from "@/components/Logo";

export const LeftSection = () => (
  <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
    <div className="absolute inset-0 bg-slate-950 z-10">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <Image
        src="/auth.webp"
        alt="asas"
        fill={true}
        className="absolute inset-0 object-cover bg-slate-950 z-0"
        draggable={false}
        loading="lazy"
      />
    </div>
    <div className="relative z-20 flex items-center text-lg font-medium">
      <Logo
        className="text-background font-extrabold uppercase bg-transparent hover:text-background hover:bg-transparent"
        navigateTo={Navigation.CLIENT_HOME}
      />
    </div>
  </div>
);
