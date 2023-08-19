import React from "react";
import { Logo } from "@/components/Logo";
import { ClientDesktopNavigation } from "./clientDesktopNavigation";
import { ClientMobileNavigation } from "./clientMobileNavigation";

export const ClientNavbar = () => (
  <section className="p-4 w-full justify-around  flex z-30  shadow-xl">
    <Logo />
    <div>
      <ClientDesktopNavigation />
      <ClientMobileNavigation />
    </div>
  </section>
);
