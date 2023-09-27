import React from "react";
import { Logo } from "@/components/Logo";
import { ClientDesktopNavigation } from "./clientDesktopNavigation";
import { ClientMobileNavigation } from "./clientMobileNavigation";

export const ClientNavbar = () => (
  <section className="p-4 w-full justify-around flex  border-b-2 ">
    <Logo />
    <div>
      <ClientDesktopNavigation />
      <ClientMobileNavigation />
    </div>
  </section>
);
