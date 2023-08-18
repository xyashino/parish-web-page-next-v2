import React, { PropsWithChildren } from "react";
import { Footer } from "@/components/Footer";
import { ClientDesktopNavigation } from "@/components/navigation/ClientDesktopNavigation";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen w-screen max-w-full overflow-hidden">
      <ClientDesktopNavigation />
      <main className="grow flex flex-col justify-between overflow-hidden  overflow-y-scroll   bg-muted">
        {children}
        <Footer showAdminIcon />
      </main>
    </div>
  );
}
